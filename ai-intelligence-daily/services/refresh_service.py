from __future__ import annotations

import logging
import threading
from datetime import datetime
from zoneinfo import ZoneInfo

from ai.deepseek import DeepSeekClient
from collectors import (
    BaiduHotCollector,
    GitHubTrendingCollector,
    HackerNewsCollector,
    JobsCollector,
    PolicyCollector,
)
from config import settings
from database import Database

logger = logging.getLogger(__name__)


class RefreshService:
    def __init__(self, db: Database, collectors=None, ai_client: DeepSeekClient | None = None):
        self.db = db
        self.collectors = collectors or [
            GitHubTrendingCollector(),
            HackerNewsCollector(),
            BaiduHotCollector(),
            PolicyCollector(),
            JobsCollector(),
        ]
        self.ai_client = ai_client or DeepSeekClient()
        self._run_lock = threading.Lock()
        self._status_lock = threading.Lock()
        self._status = {
            'state': 'IDLE',
            'trigger_type': None,
            'started_at': None,
            'finished_at': None,
            'message': '等待刷新',
            'sources': {},
        }

    def now(self) -> datetime:
        return datetime.now(ZoneInfo(settings.timezone))

    def status(self) -> dict:
        with self._status_lock:
            return {
                **self._status,
                'sources': dict(self._status.get('sources', {})),
            }

    def _set_status(self, **kwargs) -> None:
        with self._status_lock:
            self._status.update(kwargs)

    def trigger_async(self, trigger_type: str = 'MANUAL') -> bool:
        # Reserve the lock before returning 202 so a second click can never race
        # ahead of the worker thread.
        if not self._run_lock.acquire(blocking=False):
            return False
        started = self.now()
        self._set_status(
            state='RUNNING', trigger_type=trigger_type,
            started_at=started.isoformat(timespec='seconds'),
            finished_at=None, message='正在采集最新数据...', sources={},
        )
        thread = threading.Thread(
            target=self._run_prelocked,
            args=(trigger_type,),
            daemon=True,
            name=f'refresh-{trigger_type.lower()}',
        )
        thread.start()
        return True

    def _run_prelocked(self, trigger_type: str) -> None:
        try:
            self._execute_refresh(trigger_type, initialize_status=False)
        finally:
            self._run_lock.release()

    def run_refresh(self, trigger_type: str = 'AUTO') -> bool:
        if not self._run_lock.acquire(blocking=False):
            logger.info('Refresh skipped: another task is running.')
            return False
        try:
            return self._execute_refresh(trigger_type, initialize_status=True)
        finally:
            self._run_lock.release()

    def _execute_refresh(self, trigger_type: str, initialize_status: bool) -> bool:
        if initialize_status:
            started = self.now()
            self._set_status(
                state='RUNNING', trigger_type=trigger_type,
                started_at=started.isoformat(timespec='seconds'),
                finished_at=None, message='正在采集最新数据...', sources={},
            )

        try:
            news_by_category: dict[str, list[dict]] = {
                'ai_programming': [], 'social_hot': [], 'policy': []
            }
            jobs_for_report: list[dict] = []

            for collector in self.collectors:
                self._mark_source(collector.name, 'RUNNING', '采集中')
                try:
                    items = collector.collect()
                    if collector.category == 'jobs':
                        self.db.upsert_jobs(items)
                        jobs_for_report.extend(item.to_dict() for item in items)
                    else:
                        self.db.upsert_news(items)
                        news_by_category.setdefault(collector.category, []).extend(
                            item.to_dict() for item in items
                        )
                    self._mark_source(collector.name, 'SUCCESS', f'{len(items)} 条')
                except Exception as exc:
                    logger.exception('Collector failed: %s', collector.name)
                    self._mark_source(collector.name, 'FAILED', str(exc)[:160])

            # If a source failed or returned zero, allow the report to use existing latest data.
            for category in ('ai_programming', 'social_hot', 'policy'):
                if not news_by_category.get(category):
                    news_by_category[category] = self.db.get_latest_news(category, 20)
            if not jobs_for_report:
                jobs_for_report = self.db.get_latest_jobs(20)

            self._set_status(message='正在生成今日摘要...')
            try:
                report, ai_enabled = self.ai_client.generate_report(news_by_category, jobs_for_report)
            except Exception as exc:
                logger.exception('DeepSeek report failed')
                report = (
                    '## AI 日报生成失败\n\n'
                    f'本次数据已正常保存，但 DeepSeek 调用失败：`{type(exc).__name__}`。\n\n'
                    '请检查 API Key、网络和模型配置后再次手动刷新。'
                )
                ai_enabled = False

            finished = self.now()
            self.db.add_report(
                report_date=finished.date().isoformat(),
                content=report,
                generated_at=finished.isoformat(timespec='seconds'),
                trigger_type=trigger_type,
                ai_enabled=ai_enabled,
            )
            self._set_status(
                state='SUCCESS', finished_at=finished.isoformat(timespec='seconds'),
                message='刷新完成',
            )
            return True
        except Exception as exc:
            logger.exception('Refresh task failed')
            self._set_status(
                state='FAILED', finished_at=self.now().isoformat(timespec='seconds'),
                message=f'刷新失败：{type(exc).__name__}: {exc}',
            )
            return False

    def _mark_source(self, name: str, state: str, message: str) -> None:
        with self._status_lock:
            sources = dict(self._status.get('sources', {}))
            sources[name] = {'state': state, 'message': message}
            self._status['sources'] = sources

    def close(self) -> None:
        for collector in self.collectors:
            try:
                collector.close()
            except Exception:
                pass

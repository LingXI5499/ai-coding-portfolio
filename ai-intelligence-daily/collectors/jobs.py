from __future__ import annotations

from collectors.base import BaseCollector
from config import settings
from models import JobItem


JOB_KEYWORDS = (
    'java', '后端', '软件', '开发', '研发', '算法', 'ai', '人工智能',
    '大模型', 'agent', '智能体', '服务端', '客户端', '测试开发', '数据',
)


class JobsCollector(BaseCollector):
    name = '校招雷达'
    category = 'jobs'

    def collect(self) -> list[JobItem]:
        response = self.client.get(settings.jobs_url)
        response.raise_for_status()
        payload = response.json()
        updated = str(payload.get('updated', ''))
        jobs = payload.get('jobs', []) if isinstance(payload, dict) else []

        result: list[JobItem] = []
        for row in jobs:
            company = str(row.get('c', '')).strip()
            title = str(row.get('p', '')).strip()
            haystack = f'{company} {title} {row.get("w", "")} {row.get("ind", "")}'.lower()
            if not any(keyword in haystack for keyword in JOB_KEYWORDS):
                continue
            result.append(
                JobItem(
                    company=company or '未知公司',
                    title=title or '未注明岗位',
                    location=str(row.get('l', '')).strip(),
                    url=str(row.get('u', '')).strip(),
                    batch=str(row.get('w', '')).strip(),
                    deadline=str(row.get('d', '')).strip(),
                    industry=str(row.get('ind', '')).strip(),
                    published_at=updated,
                    collected_at=self.now_iso(),
                )
            )
            if len(result) >= settings.jobs_limit:
                break
        return result

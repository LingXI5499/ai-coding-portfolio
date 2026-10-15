from __future__ import annotations

import logging
import threading
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

from config import settings
from services.refresh_service import RefreshService

logger = logging.getLogger(__name__)


def next_run_time(now: datetime | None = None) -> datetime:
    tz = ZoneInfo(settings.timezone)
    current = now.astimezone(tz) if now else datetime.now(tz)
    target = current.replace(hour=8, minute=0, second=0, microsecond=0)
    if target <= current:
        target += timedelta(days=1)
    return target


class DailyScheduler:
    """Minimal single-job scheduler for the MVP.

    It only wakes up for the next 08:00 run and otherwise sleeps. There is no
    polling crawler in the background. A stop event makes shutdown immediate.
    """

    def __init__(self, refresh_service: RefreshService):
        self.refresh_service = refresh_service
        self._stop_event = threading.Event()
        self._thread: threading.Thread | None = None

    @property
    def running(self) -> bool:
        return bool(self._thread and self._thread.is_alive())

    def start(self) -> None:
        if self.running:
            return
        self._stop_event.clear()
        self._thread = threading.Thread(target=self._loop, daemon=True, name='daily-0800-scheduler')
        self._thread.start()

    def shutdown(self, wait: bool = False) -> None:
        self._stop_event.set()
        if wait and self._thread:
            self._thread.join(timeout=3)

    def _loop(self) -> None:
        while not self._stop_event.is_set():
            target = next_run_time()
            now = datetime.now(ZoneInfo(settings.timezone))
            seconds = max((target - now).total_seconds(), 1)
            logger.info('Next automatic refresh: %s', target.isoformat(timespec='seconds'))
            if self._stop_event.wait(seconds):
                return
            try:
                self.refresh_service.run_refresh('AUTO')
            except Exception:
                logger.exception('Scheduled refresh failed')


def build_scheduler(refresh_service: RefreshService) -> DailyScheduler:
    return DailyScheduler(refresh_service)

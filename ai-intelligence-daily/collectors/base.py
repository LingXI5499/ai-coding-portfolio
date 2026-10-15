from __future__ import annotations

from abc import ABC, abstractmethod
from datetime import datetime
from zoneinfo import ZoneInfo

import httpx

from config import settings


DEFAULT_HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36'
    ),
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}


class BaseCollector(ABC):
    name = 'base'
    category = 'other'

    def __init__(self, client: httpx.Client | None = None):
        self._external_client = client is not None
        self.client = client or httpx.Client(
            timeout=settings.collector_timeout,
            follow_redirects=True,
            headers=DEFAULT_HEADERS,
        )

    def now_iso(self) -> str:
        return datetime.now(ZoneInfo(settings.timezone)).isoformat(timespec='seconds')

    @abstractmethod
    def collect(self):
        raise NotImplementedError

    def close(self) -> None:
        if not self._external_client:
            self.client.close()

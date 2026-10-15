from __future__ import annotations

import re
from urllib.parse import urljoin

from bs4 import BeautifulSoup

from collectors.base import BaseCollector
from config import settings
from models import NewsItem


class PolicyCollector(BaseCollector):
    name = '中国政府网'
    category = 'policy'

    @staticmethod
    def parse_html(html: str, collected_at: str) -> list[NewsItem]:
        soup = BeautifulSoup(html, 'lxml')
        result: list[NewsItem] = []
        seen: set[str] = set()
        for anchor in soup.select('a[href]'):
            title = ' '.join(anchor.get_text(' ', strip=True).split())
            href = anchor.get('href', '').strip()
            if not title or len(title) < 6 or title in seen:
                continue
            # Government policy/news list links generally use html/htm pages.
            if not re.search(r'\.s?html?(?:$|\?)|/zhengce/', href, re.I):
                continue
            if any(word in title for word in ('首页', '登录', '注册', '繁体', 'EN')):
                continue
            seen.add(title)
            result.append(
                NewsItem(
                    title=title,
                    url=urljoin('https://www.gov.cn', href),
                    source='中国政府网',
                    category='policy',
                    collected_at=collected_at,
                    rank=len(result) + 1,
                )
            )
        return result

    def collect(self) -> list[NewsItem]:
        response = self.client.get(settings.policy_url)
        response.raise_for_status()
        return self.parse_html(response.text, self.now_iso())[: settings.news_limit_per_source]

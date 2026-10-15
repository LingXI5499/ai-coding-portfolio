from __future__ import annotations

from urllib.parse import urljoin

from bs4 import BeautifulSoup

from collectors.base import BaseCollector
from config import settings
from models import NewsItem


class BaiduHotCollector(BaseCollector):
    name = '百度热搜'
    category = 'social_hot'

    @staticmethod
    def parse_html(html: str, collected_at: str) -> list[NewsItem]:
        soup = BeautifulSoup(html, 'lxml')
        result: list[NewsItem] = []
        seen: set[str] = set()

        blocks = soup.select('[class*="category-wrap"]')
        if blocks:
            for block in blocks:
                title_node = block.select_one('.c-single-text-ellipsis') or block.select_one('[class*="ellipsis"]')
                if not title_node:
                    continue
                title = ' '.join(title_node.get_text(' ', strip=True).split())
                if not title or title in seen:
                    continue
                seen.add(title)
                link = block.select_one('a[href]')
                href = link.get('href', '') if link else ''
                result.append(
                    NewsItem(
                        title=title,
                        url=urljoin('https://top.baidu.com', href) if href else settings.baidu_url,
                        source='百度热搜',
                        category='social_hot',
                        collected_at=collected_at,
                        rank=len(result) + 1,
                    )
                )
        else:
            for anchor in soup.select('a[href]'):
                title = ' '.join(anchor.get_text(' ', strip=True).split())
                href = anchor.get('href', '')
                if not title or len(title) < 4 or title in seen:
                    continue
                if 'baidu.com/s?' not in href and '/board' not in href:
                    continue
                seen.add(title)
                result.append(
                    NewsItem(
                        title=title,
                        url=urljoin('https://top.baidu.com', href),
                        source='百度热搜',
                        category='social_hot',
                        collected_at=collected_at,
                        rank=len(result) + 1,
                    )
                )
        return result

    def collect(self) -> list[NewsItem]:
        response = self.client.get(settings.baidu_url)
        response.raise_for_status()
        return self.parse_html(response.text, self.now_iso())[: settings.news_limit_per_source]

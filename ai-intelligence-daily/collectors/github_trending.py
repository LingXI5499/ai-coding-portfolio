from __future__ import annotations

from urllib.parse import urljoin

from bs4 import BeautifulSoup

from collectors.base import BaseCollector
from config import settings
from models import NewsItem


class GitHubTrendingCollector(BaseCollector):
    name = 'GitHub Trending'
    category = 'ai_programming'

    @staticmethod
    def parse_html(html: str, collected_at: str) -> list[NewsItem]:
        soup = BeautifulSoup(html, 'lxml')
        result: list[NewsItem] = []
        for rank, article in enumerate(soup.select('article.Box-row'), start=1):
            anchor = article.select_one('h2 a')
            if not anchor:
                continue
            repo = ' '.join(anchor.get_text(' ', strip=True).split()).replace(' / ', '/')
            href = anchor.get('href', '')
            desc_node = article.select_one('p')
            desc = ' '.join(desc_node.get_text(' ', strip=True).split()) if desc_node else ''
            result.append(
                NewsItem(
                    title=repo,
                    url=urljoin('https://github.com', href),
                    source='GitHub Trending',
                    category='ai_programming',
                    summary=desc,
                    collected_at=collected_at,
                    rank=rank,
                )
            )
        return result

    def collect(self) -> list[NewsItem]:
        response = self.client.get(settings.github_trending_url)
        response.raise_for_status()
        return self.parse_html(response.text, self.now_iso())[: settings.news_limit_per_source]

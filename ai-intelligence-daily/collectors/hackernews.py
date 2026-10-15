from __future__ import annotations

from datetime import datetime
from zoneinfo import ZoneInfo

from collectors.base import BaseCollector
from config import settings
from models import NewsItem


class HackerNewsCollector(BaseCollector):
    name = 'Hacker News'
    category = 'ai_programming'

    def collect(self) -> list[NewsItem]:
        ids = self.client.get(f'{settings.hackernews_api}/topstories.json').json()
        items: list[NewsItem] = []
        for rank, story_id in enumerate(ids[: max(settings.news_limit_per_source * 2, 20)], start=1):
            try:
                data = self.client.get(f'{settings.hackernews_api}/item/{story_id}.json').json()
            except Exception:
                continue
            if not data or data.get('type') != 'story' or not data.get('title'):
                continue
            published = ''
            if data.get('time'):
                published = datetime.fromtimestamp(
                    data['time'], tz=ZoneInfo(settings.timezone)
                ).isoformat(timespec='seconds')
            items.append(
                NewsItem(
                    title=data['title'].strip(),
                    url=data.get('url') or f'https://news.ycombinator.com/item?id={story_id}',
                    source=self.name,
                    category=self.category,
                    published_at=published,
                    collected_at=self.now_iso(),
                    rank=rank,
                )
            )
            if len(items) >= settings.news_limit_per_source:
                break
        return items

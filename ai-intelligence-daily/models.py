from __future__ import annotations

import hashlib
from dataclasses import dataclass, asdict
from typing import Any


def make_fingerprint(*parts: str) -> str:
    normalized = '|'.join((part or '').strip().lower() for part in parts)
    return hashlib.sha256(normalized.encode('utf-8')).hexdigest()


@dataclass
class NewsItem:
    title: str
    url: str
    source: str
    category: str
    published_at: str = ''
    collected_at: str = ''
    summary: str = ''
    rank: int | None = None

    @property
    def fingerprint(self) -> str:
        return make_fingerprint(self.source, self.title, self.url)

    def to_dict(self) -> dict[str, Any]:
        data = asdict(self)
        data['fingerprint'] = self.fingerprint
        return data


@dataclass
class JobItem:
    company: str
    title: str
    location: str
    url: str
    published_at: str = ''
    collected_at: str = ''
    batch: str = ''
    deadline: str = ''
    industry: str = ''

    @property
    def fingerprint(self) -> str:
        return make_fingerprint(self.company, self.title, self.location, self.url)

    def to_dict(self) -> dict[str, Any]:
        data = asdict(self)
        data['fingerprint'] = self.fingerprint
        return data

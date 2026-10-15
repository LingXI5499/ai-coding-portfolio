from __future__ import annotations

import sqlite3
from pathlib import Path
from typing import Iterable

from models import JobItem, NewsItem


class Database:
    def __init__(self, path: str):
        self.path = str(path)
        Path(self.path).parent.mkdir(parents=True, exist_ok=True)

    def connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.path, timeout=30, check_same_thread=False)
        conn.row_factory = sqlite3.Row
        conn.execute('PRAGMA journal_mode=WAL;')
        conn.execute('PRAGMA foreign_keys=ON;')
        return conn

    def init(self) -> None:
        with self.connect() as conn:
            conn.executescript(
                '''
                CREATE TABLE IF NOT EXISTS news (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    url TEXT NOT NULL,
                    source TEXT NOT NULL,
                    category TEXT NOT NULL,
                    summary TEXT NOT NULL DEFAULT '',
                    rank INTEGER,
                    published_at TEXT NOT NULL DEFAULT '',
                    collected_at TEXT NOT NULL,
                    fingerprint TEXT NOT NULL UNIQUE
                );

                CREATE INDEX IF NOT EXISTS idx_news_category_collected
                ON news(category, collected_at DESC);

                CREATE TABLE IF NOT EXISTS jobs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    company TEXT NOT NULL,
                    title TEXT NOT NULL,
                    location TEXT NOT NULL DEFAULT '',
                    url TEXT NOT NULL,
                    batch TEXT NOT NULL DEFAULT '',
                    deadline TEXT NOT NULL DEFAULT '',
                    industry TEXT NOT NULL DEFAULT '',
                    published_at TEXT NOT NULL DEFAULT '',
                    collected_at TEXT NOT NULL,
                    fingerprint TEXT NOT NULL UNIQUE
                );

                CREATE INDEX IF NOT EXISTS idx_jobs_collected
                ON jobs(collected_at DESC);

                CREATE TABLE IF NOT EXISTS daily_report (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    report_date TEXT NOT NULL,
                    content TEXT NOT NULL,
                    generated_at TEXT NOT NULL,
                    trigger_type TEXT NOT NULL CHECK(trigger_type IN ('AUTO', 'MANUAL')),
                    ai_enabled INTEGER NOT NULL DEFAULT 0
                );

                CREATE INDEX IF NOT EXISTS idx_report_date
                ON daily_report(report_date DESC, generated_at DESC);
                '''
            )

    def upsert_news(self, items: Iterable[NewsItem]) -> int:
        inserted = 0
        with self.connect() as conn:
            for item in items:
                cur = conn.execute(
                    '''
                    INSERT INTO news(title, url, source, category, summary, rank,
                                     published_at, collected_at, fingerprint)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(fingerprint) DO UPDATE SET
                        summary=excluded.summary,
                        rank=excluded.rank,
                        published_at=CASE
                            WHEN excluded.published_at <> '' THEN excluded.published_at
                            ELSE news.published_at END,
                        collected_at=excluded.collected_at
                    ''',
                    (
                        item.title, item.url, item.source, item.category,
                        item.summary, item.rank, item.published_at,
                        item.collected_at, item.fingerprint,
                    ),
                )
                if cur.rowcount:
                    inserted += 1
        return inserted

    def upsert_jobs(self, items: Iterable[JobItem]) -> int:
        inserted = 0
        with self.connect() as conn:
            for item in items:
                cur = conn.execute(
                    '''
                    INSERT INTO jobs(company, title, location, url, batch, deadline,
                                     industry, published_at, collected_at, fingerprint)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(fingerprint) DO UPDATE SET
                        batch=excluded.batch,
                        deadline=excluded.deadline,
                        industry=excluded.industry,
                        published_at=CASE
                            WHEN excluded.published_at <> '' THEN excluded.published_at
                            ELSE jobs.published_at END,
                        collected_at=excluded.collected_at
                    ''',
                    (
                        item.company, item.title, item.location, item.url,
                        item.batch, item.deadline, item.industry,
                        item.published_at, item.collected_at, item.fingerprint,
                    ),
                )
                if cur.rowcount:
                    inserted += 1
        return inserted

    def add_report(
        self,
        report_date: str,
        content: str,
        generated_at: str,
        trigger_type: str,
        ai_enabled: bool,
    ) -> int:
        with self.connect() as conn:
            cur = conn.execute(
                '''INSERT INTO daily_report(report_date, content, generated_at, trigger_type, ai_enabled)
                   VALUES (?, ?, ?, ?, ?)''',
                (report_date, content, generated_at, trigger_type, int(ai_enabled)),
            )
            return int(cur.lastrowid)

    def get_latest_news(self, category: str, limit: int = 20) -> list[dict]:
        with self.connect() as conn:
            rows = conn.execute(
                '''SELECT * FROM news WHERE category=?
                   ORDER BY collected_at DESC, COALESCE(rank, 9999) ASC, id DESC LIMIT ?''',
                (category, limit),
            ).fetchall()
            return [dict(row) for row in rows]

    def get_latest_jobs(self, limit: int = 20) -> list[dict]:
        with self.connect() as conn:
            rows = conn.execute(
                'SELECT * FROM jobs ORDER BY collected_at DESC, id DESC LIMIT ?',
                (limit,),
            ).fetchall()
            return [dict(row) for row in rows]

    def get_latest_report(self) -> dict | None:
        with self.connect() as conn:
            row = conn.execute(
                'SELECT * FROM daily_report ORDER BY generated_at DESC, id DESC LIMIT 1'
            ).fetchone()
            return dict(row) if row else None

    def get_last_update(self) -> str | None:
        with self.connect() as conn:
            row = conn.execute(
                '''SELECT MAX(ts) AS last_update FROM (
                       SELECT MAX(collected_at) AS ts FROM news
                       UNION ALL
                       SELECT MAX(collected_at) AS ts FROM jobs
                       UNION ALL
                       SELECT MAX(generated_at) AS ts FROM daily_report
                   )'''
            ).fetchone()
            return row['last_update'] if row and row['last_update'] else None

    def counts(self) -> dict[str, int]:
        with self.connect() as conn:
            news = conn.execute('SELECT COUNT(*) c FROM news').fetchone()['c']
            jobs = conn.execute('SELECT COUNT(*) c FROM jobs').fetchone()['c']
            reports = conn.execute('SELECT COUNT(*) c FROM daily_report').fetchone()['c']
        return {'news': news, 'jobs': jobs, 'reports': reports}

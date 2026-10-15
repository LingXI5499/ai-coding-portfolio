import tempfile
import unittest
from pathlib import Path

from database import Database
from models import JobItem, NewsItem


class DatabaseTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.db = Database(str(Path(self.temp.name) / 'test.db'))
        self.db.init()

    def tearDown(self):
        self.temp.cleanup()

    def test_news_upsert_does_not_duplicate(self):
        first = NewsItem('A', 'https://a', 'S', 'ai_programming', collected_at='2026-09-20T08:00:00')
        second = NewsItem('A', 'https://a', 'S', 'ai_programming', collected_at='2026-09-20T09:00:00')
        self.db.upsert_news([first])
        self.db.upsert_news([second])
        rows = self.db.get_latest_news('ai_programming')
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]['collected_at'], '2026-09-20T09:00:00')

    def test_jobs_upsert_does_not_duplicate(self):
        item = JobItem('C', 'Java', '北京', 'https://x', collected_at='2026-09-20T08:00:00')
        self.db.upsert_jobs([item, item])
        self.assertEqual(len(self.db.get_latest_jobs()), 1)

    def test_report_is_persisted(self):
        self.db.add_report('2026-09-20', '# report', '2026-09-20T08:03:00', 'AUTO', True)
        row = self.db.get_latest_report()
        self.assertEqual(row['trigger_type'], 'AUTO')
        self.assertEqual(row['ai_enabled'], 1)


if __name__ == '__main__':
    unittest.main()

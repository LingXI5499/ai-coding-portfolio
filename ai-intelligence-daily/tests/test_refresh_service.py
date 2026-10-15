import tempfile
import threading
import time
import unittest
from pathlib import Path

from database import Database
from models import NewsItem
from services.refresh_service import RefreshService


class FakeCollector:
    name = 'Fake'
    category = 'ai_programming'

    def collect(self):
        time.sleep(0.15)
        return [NewsItem('Demo', 'https://demo', 'Fake', 'ai_programming', collected_at='2026-09-20T08:00:00')]

    def close(self):
        pass


class FakeAI:
    enabled = False

    def generate_report(self, news_by_category, jobs):
        return '# fake report', False


class RefreshServiceTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.db = Database(str(Path(self.temp.name) / 'test.db'))
        self.db.init()
        self.service = RefreshService(self.db, collectors=[FakeCollector()], ai_client=FakeAI())

    def tearDown(self):
        self.temp.cleanup()

    def test_refresh_saves_data_and_report(self):
        ok = self.service.run_refresh('MANUAL')
        self.assertTrue(ok)
        self.assertEqual(self.service.status()['state'], 'SUCCESS')
        self.assertEqual(len(self.db.get_latest_news('ai_programming')), 1)
        self.assertIsNotNone(self.db.get_latest_report())

    def test_lock_rejects_concurrent_refresh(self):
        thread = threading.Thread(target=self.service.run_refresh, args=('MANUAL',))
        thread.start()
        time.sleep(0.03)
        second = self.service.run_refresh('MANUAL')
        thread.join()
        self.assertFalse(second)


if __name__ == '__main__':
    unittest.main()

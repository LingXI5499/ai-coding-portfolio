import unittest
from datetime import datetime
from zoneinfo import ZoneInfo

from scheduler import next_run_time


class SchedulerTests(unittest.TestCase):
    def test_before_eight_runs_today(self):
        tz = ZoneInfo('Asia/Shanghai')
        now = datetime(2026, 9, 20, 7, 30, tzinfo=tz)
        target = next_run_time(now)
        self.assertEqual((target.hour, target.minute, target.day), (8, 0, 20))

    def test_after_eight_runs_tomorrow(self):
        tz = ZoneInfo('Asia/Shanghai')
        now = datetime(2026, 9, 20, 8, 1, tzinfo=tz)
        target = next_run_time(now)
        self.assertEqual((target.hour, target.minute, target.day), (8, 0, 21))


if __name__ == '__main__':
    unittest.main()

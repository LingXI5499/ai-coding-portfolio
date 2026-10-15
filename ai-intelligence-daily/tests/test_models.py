import unittest

from models import JobItem, NewsItem, make_fingerprint


class ModelTests(unittest.TestCase):
    def test_fingerprint_is_stable(self):
        self.assertEqual(make_fingerprint('A', 'B'), make_fingerprint(' a ', ' b '))

    def test_news_fingerprint_changes_with_url(self):
        a = NewsItem('Title', 'https://a', 'Source', 'ai_programming')
        b = NewsItem('Title', 'https://b', 'Source', 'ai_programming')
        self.assertNotEqual(a.fingerprint, b.fingerprint)

    def test_job_to_dict_contains_fingerprint(self):
        item = JobItem('Company', 'Java 后端', '北京', 'https://job')
        data = item.to_dict()
        self.assertIn('fingerprint', data)
        self.assertEqual(data['company'], 'Company')


if __name__ == '__main__':
    unittest.main()

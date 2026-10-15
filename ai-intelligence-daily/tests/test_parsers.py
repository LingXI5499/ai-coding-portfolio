import unittest

from collectors.baidu import BaiduHotCollector
from collectors.github_trending import GitHubTrendingCollector
from collectors.policy import PolicyCollector


class ParserTests(unittest.TestCase):
    def test_github_trending_parser(self):
        html = '''<article class="Box-row"><h2><a href="/foo/bar"> foo / bar </a></h2><p>demo repo</p></article>'''
        rows = GitHubTrendingCollector.parse_html(html, '2026-09-20T08:00:00')
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0].title, 'foo/bar')
        self.assertEqual(rows[0].summary, 'demo repo')

    def test_baidu_parser(self):
        html = '''<div class="category-wrap_iQLoo"><a href="https://www.baidu.com/s?wd=x"><div class="c-single-text-ellipsis">热点事件</div></a></div>'''
        rows = BaiduHotCollector.parse_html(html, '2026-09-20T08:00:00')
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0].title, '热点事件')

    def test_policy_parser(self):
        html = '''<div><a href="/zhengce/content/202609/content_123.htm">关于软件产业发展的政策通知</a></div>'''
        rows = PolicyCollector.parse_html(html, '2026-09-20T08:00:00')
        self.assertEqual(len(rows), 1)
        self.assertTrue(rows[0].url.startswith('https://www.gov.cn'))


if __name__ == '__main__':
    unittest.main()

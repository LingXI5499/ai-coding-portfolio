from __future__ import annotations

import httpx

from config import settings


class DeepSeekClient:
    def __init__(self):
        self.enabled = bool(settings.deepseek_api_key.strip())

    def generate_report(self, news_by_category: dict[str, list[dict]], jobs: list[dict]) -> tuple[str, bool]:
        if not self.enabled:
            return self._local_report(news_by_category, jobs), False

        prompt = self._build_prompt(news_by_category, jobs)
        response = httpx.post(
            f'{settings.deepseek_api_base.rstrip("/")}/chat/completions',
            headers={
                'Authorization': f'Bearer {settings.deepseek_api_key}',
                'Content-Type': 'application/json',
            },
            json={
                'model': settings.deepseek_model,
                'messages': [
                    {
                        'role': 'system',
                        'content': (
                            '你是个人信息情报助手。只能根据输入材料总结，不得编造事实。'
                            '对政策只做内容摘要，不把模型解释写成官方结论。输出简洁中文 Markdown。'
                        ),
                    },
                    {'role': 'user', 'content': prompt},
                ],
                'temperature': 0.2,
            },
            timeout=settings.deepseek_timeout,
        )
        response.raise_for_status()
        data = response.json()
        return data['choices'][0]['message']['content'].strip(), True

    def _build_prompt(self, news_by_category: dict[str, list[dict]], jobs: list[dict]) -> str:
        def lines(items: list[dict], count: int = 10) -> str:
            return '\n'.join(f'- {x.get("title", "")} | {x.get("source", "")} | {x.get("url", "")}' for x in items[:count]) or '- 暂无'

        job_lines = '\n'.join(
            f'- {j.get("company", "")} | {j.get("title", "")} | {j.get("location", "")} | {j.get("url", "")}'
            for j in jobs[:12]
        ) or '- 暂无'
        return f'''请根据以下最新采集数据生成“今日个人情报日报”。\n\n## AI / 编程\n{lines(news_by_category.get('ai_programming', []), 14)}\n\n## 社会热点\n{lines(news_by_category.get('social_hot', []), 10)}\n\n## 国家政策\n{lines(news_by_category.get('policy', []), 10)}\n\n## 秋招岗位\n{job_lines}\n\n要求：\n1. 分成 AI/编程、社会热点、国家政策、秋招四部分。\n2. 最后列出“今天最值得关注的 5 件事”。\n3. 每个关键判断说明来自哪个标题/来源，不新增输入中不存在的事实。\n4. 秋招部分重点关注软件开发、Java、后端、AI/Agent相关机会。\n5. 总字数尽量控制在 1000 字内。'''

    def _local_report(self, news_by_category: dict[str, list[dict]], jobs: list[dict]) -> str:
        def top_titles(key: str, n: int = 5) -> str:
            items = news_by_category.get(key, [])[:n]
            if not items:
                return '暂无数据。'
            return '\n'.join(f'- {item.get("title", "")}' for item in items)

        job_text = '\n'.join(
            f'- {j.get("company", "")}：{j.get("title", "")}（{j.get("location", "未注明地点")}）'
            for j in jobs[:5]
        ) or '暂无数据。'
        return f'''## AI / 编程\n{top_titles('ai_programming')}\n\n## 社会热点\n{top_titles('social_hot')}\n\n## 国家政策\n{top_titles('policy')}\n\n## 秋招岗位\n{job_text}\n\n> 当前未配置 DeepSeek API Key，因此这里展示本地规则版摘要。配置后会自动切换为 AI 日报。'''

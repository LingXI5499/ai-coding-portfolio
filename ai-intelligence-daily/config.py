from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / '.env')


def _env_bool(name: str, default: bool) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {'1', 'true', 'yes', 'on'}


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv('APP_NAME', 'AI 情报日报')
    host: str = os.getenv('HOST', '127.0.0.1')
    port: int = int(os.getenv('PORT', '8000'))
    timezone: str = os.getenv('TIMEZONE', 'Asia/Shanghai')
    database_path: str = str((BASE_DIR / os.getenv('DATABASE_PATH', 'data/app.db')).resolve()) if not Path(os.getenv('DATABASE_PATH', 'data/app.db')).is_absolute() else os.getenv('DATABASE_PATH', str(BASE_DIR / 'data' / 'app.db'))
    enable_scheduler: bool = _env_bool('ENABLE_SCHEDULER', True)

    collector_timeout: float = float(os.getenv('COLLECTOR_TIMEOUT', '15'))
    news_limit_per_source: int = int(os.getenv('NEWS_LIMIT_PER_SOURCE', '12'))
    jobs_limit: int = int(os.getenv('JOBS_LIMIT', '20'))

    deepseek_api_key: str = os.getenv('DEEPSEEK_API_KEY', '')
    deepseek_api_base: str = os.getenv('DEEPSEEK_API_BASE', 'https://api.deepseek.com')
    deepseek_model: str = os.getenv('DEEPSEEK_MODEL', 'deepseek-chat')
    deepseek_timeout: float = float(os.getenv('DEEPSEEK_TIMEOUT', '45'))

    baidu_url: str = os.getenv('BAIDU_URL', 'https://top.baidu.com/board?tab=realtime')
    hackernews_api: str = os.getenv('HACKERNEWS_API', 'https://hacker-news.firebaseio.com/v0')
    github_trending_url: str = os.getenv('GITHUB_TRENDING_URL', 'https://github.com/trending?since=daily')
    policy_url: str = os.getenv('POLICY_URL', 'https://www.gov.cn/zhengce/zuixin/')
    jobs_url: str = os.getenv(
        'JOBS_URL',
        'https://raw.githubusercontent.com/jiabaobei/xiaozhao-radar/main/jobs.json',
    )


settings = Settings()

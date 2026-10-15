# AI Intelligence Daily · AI 情报日报

面向个人的信息聚合网站，采集技术、AI、社会热点、政策和秋招公开信息，提供去重、刷新进度与日报摘要。使用 Python、FastAPI、Jinja2、SQLite、httpx 和 BeautifulSoup。

```powershell
python -m venv .venv
.venv\Scripts\python -m pip install -r requirements.txt
Copy-Item .env.example .env
.venv\Scripts\python main.py
```

访问 http://127.0.0.1:8000/。服务持续运行时，每天 Asia/Shanghai 08:00 刷新一次，也可手动刷新；两者共享任务锁。DeepSeek Key 可选，未配置时使用本地规则摘要。采集失败保留最近数据。

```powershell
.venv\Scripts\python -m unittest discover -s tests -v
```

数据库首次运行时在 data 创建，不随集合提交。只提交 .env.example，实际密钥保存在本机 .env。外部采集服务的当前可用性需要联网实测。

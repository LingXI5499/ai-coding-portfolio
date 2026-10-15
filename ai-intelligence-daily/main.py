from __future__ import annotations

import logging
from contextlib import asynccontextmanager
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

import uvicorn
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from config import BASE_DIR, settings
from database import Database
from scheduler import build_scheduler
from services.refresh_service import RefreshService

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s | %(levelname)s | %(name)s | %(message)s',
)
logger = logging.getLogger(__name__)

db = Database(settings.database_path)
refresh_service = RefreshService(db)
scheduler = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global scheduler
    db.init()
    if settings.enable_scheduler:
        scheduler = build_scheduler(refresh_service)
        scheduler.start()
        logger.info('Scheduler started: daily 08:00, timezone=%s', settings.timezone)
    else:
        logger.info('Scheduler disabled by ENABLE_SCHEDULER=false')
    yield
    if scheduler and scheduler.running:
        scheduler.shutdown(wait=False)
    refresh_service.close()


app = FastAPI(title=settings.app_name, version='0.1.0', lifespan=lifespan)
app.mount('/static', StaticFiles(directory=str(BASE_DIR / 'static')), name='static')
templates = Jinja2Templates(directory=str(BASE_DIR / 'templates'))


def next_auto_refresh() -> str:
    tz = ZoneInfo(settings.timezone)
    now = datetime.now(tz)
    target = now.replace(hour=8, minute=0, second=0, microsecond=0)
    if target <= now:
        target += timedelta(days=1)
    return target.isoformat(timespec='minutes')


@app.get('/', response_class=HTMLResponse)
def home(request: Request):
    data = {
        'ai_programming': db.get_latest_news('ai_programming', 16),
        'social_hot': db.get_latest_news('social_hot', 12),
        'policy': db.get_latest_news('policy', 12),
        'jobs': db.get_latest_jobs(20),
        'report': db.get_latest_report(),
        'last_update': db.get_last_update(),
        'next_update': next_auto_refresh(),
        'refresh_status': refresh_service.status(),
        'timezone': settings.timezone,
        'app_name': settings.app_name,
    }
    return templates.TemplateResponse(request=request, name='index.html', context=data)


@app.get('/api/today')
def api_today():
    return {
        'ai_programming': db.get_latest_news('ai_programming', 16),
        'social_hot': db.get_latest_news('social_hot', 12),
        'policy': db.get_latest_news('policy', 12),
        'jobs': db.get_latest_jobs(20),
        'report': db.get_latest_report(),
        'last_update': db.get_last_update(),
        'next_update': next_auto_refresh(),
    }


@app.post('/api/refresh', status_code=status.HTTP_202_ACCEPTED)
def api_refresh():
    started = refresh_service.trigger_async('MANUAL')
    if not started:
        raise HTTPException(status_code=409, detail='已有刷新任务正在运行，请勿重复触发。')
    return {'accepted': True, 'message': '已开始刷新。'}


@app.get('/api/refresh/status')
def api_refresh_status():
    return refresh_service.status()


@app.get('/api/report/today')
def api_report_today():
    report = db.get_latest_report()
    if not report:
        raise HTTPException(status_code=404, detail='暂无日报。')
    return report


@app.get('/health')
def health():
    return {
        'status': 'ok',
        'scheduler_enabled': settings.enable_scheduler,
        'timezone': settings.timezone,
        'counts': db.counts(),
    }


if __name__ == '__main__':
    uvicorn.run('main:app', host=settings.host, port=settings.port, reload=False)

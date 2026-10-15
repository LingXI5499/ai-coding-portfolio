@echo off
cd /d %~dp0\..
if not exist .venv (
  py -3 -m venv .venv
)
call .venv\Scripts\activate
python -m pip install -r requirements.txt
if not exist .env copy .env.example .env
python main.py
pause

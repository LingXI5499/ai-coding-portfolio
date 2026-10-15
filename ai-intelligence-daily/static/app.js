const refreshBtn = document.getElementById('refreshBtn');
const statusText = document.getElementById('statusText');
const progressBox = document.getElementById('progressBox');
const progressMessage = document.getElementById('progressMessage');
const sourceProgress = document.getElementById('sourceProgress');
const toast = document.getElementById('toast');
let pollTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2800);
}

function renderSources(sources = {}) {
  sourceProgress.innerHTML = '';
  Object.entries(sources).forEach(([name, data]) => {
    const tag = document.createElement('span');
    tag.className = `source-tag ${data.state || ''}`;
    tag.textContent = `${name}: ${data.message || data.state}`;
    sourceProgress.appendChild(tag);
  });
}

async function fetchStatus() {
  const res = await fetch('/api/refresh/status');
  const data = await res.json();
  statusText.textContent = data.state;
  progressMessage.textContent = data.message || '';
  renderSources(data.sources);

  if (data.state === 'RUNNING') {
    refreshBtn.disabled = true;
    refreshBtn.textContent = '正在刷新…';
    progressBox.classList.remove('hidden');
    return;
  }

  refreshBtn.disabled = false;
  refreshBtn.textContent = '↻ 立即刷新';
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }
  if (data.state === 'SUCCESS') {
    showToast('刷新完成，正在重新加载页面');
    setTimeout(() => window.location.reload(), 700);
  } else if (data.state === 'FAILED') {
    showToast(data.message || '刷新失败');
  }
}

async function startRefresh() {
  refreshBtn.disabled = true;
  refreshBtn.textContent = '正在启动…';
  try {
    const res = await fetch('/api/refresh', { method: 'POST' });
    if (res.status === 409) {
      showToast('已有刷新任务正在运行');
    } else if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    progressBox.classList.remove('hidden');
    await fetchStatus();
    if (!pollTimer) pollTimer = setInterval(fetchStatus, 1500);
  } catch (err) {
    refreshBtn.disabled = false;
    refreshBtn.textContent = '↻ 立即刷新';
    showToast(`启动刷新失败：${err.message}`);
  }
}

refreshBtn.addEventListener('click', startRefresh);
if (statusText.textContent.trim() === 'RUNNING') {
  fetchStatus();
  pollTimer = setInterval(fetchStatus, 1500);
}

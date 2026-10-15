const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res) => {
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); }
  catch { res.writeHead(400).end(); return; }
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  if (file === root) file = path.join(root,'index.html');
  fs.stat(file,(err,stat) => {
    if (err || !stat.isFile()) { res.writeHead(404).end(); return; }
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'});
    fs.createReadStream(file).pipe(res);
  });
}).listen(4173,'127.0.0.1',() => console.log('Frontend Lab: http://127.0.0.1:4173/'));

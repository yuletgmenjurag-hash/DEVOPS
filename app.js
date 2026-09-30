const http = require('http');

function createServer() {
  const tasks = [];
  return http.createServer((req, res) => {
    const send = (code, data, type = 'application/json') => {
      res.writeHead(code, { 'Content-Type': type });
      res.end(type === 'application/json' ? JSON.stringify(data) : data);
    };
    if (req.url === '/') return send(200, '<h1>Gestor de tareas DevOps</h1><p>Rutas: /health, /tasks</p>', 'text/html; charset=utf-8');
    if (req.url === '/health') return send(200, { status: 'ok' });
    if (req.url === '/tasks' && req.method === 'GET') return send(200, tasks);
    if (req.url === '/tasks' && req.method === 'POST') {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => {
        try {
          const { title } = JSON.parse(body);
          if (!title) return send(400, { error: 'title requerido' });
          const task = { id: tasks.length + 1, title, done: false };
          tasks.push(task);
          send(201, task);
        } catch {
          send(400, { error: 'JSON invalido' });
        }
      });
      return;
    }
    send(404, { error: 'no encontrado' });
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, () => console.log(`App en puerto ${port}`));
}

module.exports = { createServer };

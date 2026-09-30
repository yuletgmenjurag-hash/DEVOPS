const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../app');

test('API de tareas', async (t) => {
  const server = createServer();
  await new Promise((r) => server.listen(0, r));
  const base = `http://localhost:${server.address().port}`;
  t.after(() => server.close());

  await t.test('/health responde ok', async () => {
    const res = await fetch(`${base}/health`);
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(await res.json(), { status: 'ok' });
  });

  await t.test('crea y lista tareas', async () => {
    const post = await fetch(`${base}/tasks`, { method: 'POST', body: JSON.stringify({ title: 'Estudiar DevOps' }) });
    assert.strictEqual(post.status, 201);
    const list = await (await fetch(`${base}/tasks`)).json();
    assert.strictEqual(list.length, 1);
  });

  await t.test('rechaza tarea sin titulo', async () => {
    const res = await fetch(`${base}/tasks`, { method: 'POST', body: '{}' });
    assert.strictEqual(res.status, 400);
  });
});

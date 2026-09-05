import { useMemo, useState } from 'react'

const ENDPOINTS = {
  'GET /api/devices': { status: 200, body: '[{"id":"sensor1","online":true}, {"id":"sensor2","online":false}]' },
  'GET /api/devices/:id': { status: 200, body: '{"id":"sensor1","temperature":22.5,"online":true}' },
  'GET /api/devices/:id (не існує)': { status: 404, body: '{"error":"Пристрій не знайдено"}' },
  'POST /api/devices/:id/readings': { status: 201, body: '{"ok":true}' },
  'POST /api/devices/:id/readings (без auth)': { status: 401, body: '{"error":"Токен відсутній"}' },
  'POST /api/devices/:id/commands (невалідні дані)': { status: 400, body: '{"error":"Некоректний інтервал"}' },
}

function statusColor(code) {
  if (code < 300) return 'var(--brand)'
  if (code < 500) return 'var(--accent)'
  return 'var(--danger)'
}

export default function HttpRequestBuilder() {
  const [endpoint, setEndpoint] = useState('GET /api/devices')
  const result = useMemo(() => ENDPOINTS[endpoint], [endpoint])

  return (
    <div className="widget">
      <h3>REST API — оберіть запит і подивіться відповідь</h3>
      <div className="field">
        <label>Запит</label>
        <select value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
          {Object.keys(ENDPOINTS).map((key) => <option key={key} value={key}>{key}</option>)}
        </select>
      </div>
      <div className="frame">
        <div style={{ color: statusColor(result.status), fontWeight: 700, marginBottom: 8 }}>
          HTTP {result.status}
        </div>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{result.body}</pre>
      </div>
      <p className="hint">
        Статус-код повідомляє результат ще до розбору тіла відповіді: 2xx — успіх, 4xx — помилка клієнта, 5xx — помилка сервера.
      </p>
    </div>
  )
}

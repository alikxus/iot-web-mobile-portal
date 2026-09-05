import { useMemo, useState } from 'react'

function base64UrlEncode(obj) {
  const json = JSON.stringify(obj)
  return btoa(json).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export default function JwtDecoder() {
  const [username, setUsername] = useState('operator1')
  const [expiresHours, setExpiresHours] = useState(24)

  const { header, payload, token } = useMemo(() => {
    const header = { alg: 'HS256', typ: 'JWT' }
    const now = Math.floor(Date.now() / 1000)
    const payload = { username, iat: now, exp: now + expiresHours * 3600 }
    const encodedHeader = base64UrlEncode(header)
    const encodedPayload = base64UrlEncode(payload)
    const fakeSignature = 'HMACSHA256-signature-hidden'
    return { header, payload, token: `${encodedHeader}.${encodedPayload}.${fakeSignature}` }
  }, [username, expiresHours])

  return (
    <div className="widget">
      <h3>Структура JWT-токена</h3>

      <div className="controls">
        <div className="field">
          <label>username (payload)</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="field">
          <label>Термін дії, год</label>
          <input type="number" value={expiresHours} min={1} max={168} onChange={(e) => setExpiresHours(+e.target.value)} />
        </div>
      </div>

      <div className="frame">
        <div style={{ wordBreak: 'break-all', fontSize: 12 }}>
          <span style={{ color: '#e74c3c' }}>{token.split('.')[0]}</span>.
          <span style={{ color: '#3498db' }}>{token.split('.')[1]}</span>.
          <span style={{ color: '#2ecc71' }}>{token.split('.')[2]}</span>
        </div>
      </div>
      <div className="legend">
        <span style={{ color: '#e74c3c' }}>■ Header (алгоритм)</span>
        <span style={{ color: '#3498db' }}>■ Payload (дані)</span>
        <span style={{ color: '#2ecc71' }}>■ Підпис (перевірка цілісності)</span>
      </div>

      <p className="hint">Header і Payload лише закодовані (Base64), НЕ зашифровані — будь-хто може їх прочитати. Секретність гарантує тільки підпис, що перевіряється на сервері.</p>

      <pre className="code"><code>{JSON.stringify({ header, payload }, null, 2)}</code></pre>
    </div>
  )
}

import { useMemo, useState } from 'react'

export default function ManifestPreview() {
  const [name, setName] = useState('IoT Дашборд')
  const [shortName, setShortName] = useState('IoT')
  const [themeColor, setThemeColor] = useState('#3498db')
  const [display, setDisplay] = useState('standalone')

  const manifest = useMemo(() => ({
    name,
    short_name: shortName,
    start_url: '/',
    display,
    background_color: '#ffffff',
    theme_color: themeColor,
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }), [name, shortName, themeColor, display])

  return (
    <div className="widget">
      <h3>Конструктор Web App Manifest</h3>

      <div className="controls">
        <div className="field">
          <label>name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>short_name</label>
          <input value={shortName} onChange={(e) => setShortName(e.target.value)} maxLength={12} />
        </div>
        <div className="field">
          <label>theme_color</label>
          <input type="color" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} />
        </div>
        <div className="field">
          <label>display</label>
          <select value={display} onChange={(e) => setDisplay(e.target.value)}>
            <option value="standalone">standalone</option>
            <option value="fullscreen">fullscreen</option>
            <option value="minimal-ui">minimal-ui</option>
            <option value="browser">browser</option>
          </select>
        </div>
      </div>

      <div className="gauge-wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: themeColor, padding: '10px 16px', borderRadius: 10, color: '#fff' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,.3)' }} />
          <b>{shortName || 'Назва'}</b>
        </div>
      </div>
      <p className="hint">Так виглядатиме іконка й підпис на головному екрані телефону (спрощено).</p>

      <pre className="code"><code>{JSON.stringify(manifest, null, 2)}</code></pre>
    </div>
  )
}

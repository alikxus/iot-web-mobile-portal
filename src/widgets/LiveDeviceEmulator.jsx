import { useEffect, useRef, useState } from 'react'

const MAX_POINTS = 40

export default function LiveDeviceEmulator() {
  const [online, setOnline] = useState(true)
  const [temperature, setTemperature] = useState(22)
  const history = useRef([22])
  const [, forceRender] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTemperature((prev) => {
        if (!online) return prev // офлайн — значення заморожено, як реальний пристрій без зв'язку
        const next = Math.max(15, Math.min(35, prev + (Math.random() - 0.5) * 1.2))
        history.current = [...history.current, next].slice(-MAX_POINTS)
        return next
      })
      forceRender((n) => n + 1)
    }, 500)
    return () => clearInterval(id)
  }, [online])

  const points = history.current
    .map((v, i) => `${(i / (MAX_POINTS - 1)) * 100},${40 - ((v - 15) / 20) * 40}`)
    .join(' ')

  return (
    <div className="widget">
      <h3>Живий емулятор пристрою (та сама логіка, що у вашому Node.js-коді)</h3>
      <p className="hint">
        Клас <code>DeviceEmulator</code> з циклом <code>tick()</code>: плавна зміна значення з шумом, "заморожування" при втраті зв'язку.
      </p>

      <div className="seg">
        <button className={online ? 'on' : ''} onClick={() => setOnline(true)}>Онлайн</button>
        <button className={!online ? 'on' : ''} onClick={() => setOnline(false)}>Офлайн (LWT)</button>
      </div>

      <div className="gauge-wrap">
        <div>
          <div className="sim-bar-track">
            <div className="sim-bar-fill" style={{ height: `${((temperature - 15) / 20) * 100}%`, background: online ? 'var(--brand-2)' : 'var(--muted)' }} />
          </div>
          <p className="hint" style={{ textAlign: 'center' }}>{temperature.toFixed(1)}°C</p>
        </div>

        <svg className="sim-chart" viewBox="0 0 100 40" preserveAspectRatio="none">
          <polyline points={points} fill="none" stroke={online ? 'var(--brand-2)' : 'var(--muted)'} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      {!online && <div className="verdict bad">🔴 Пристрій офлайн — брокер публікує retained status: {"{ online: false }"} через Last Will</div>}
    </div>
  )
}

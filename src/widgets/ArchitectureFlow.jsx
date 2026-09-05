import { useState } from 'react'

const STAGES = {
  device: {
    title: 'IoT-пристрій (емулятор)',
    text: 'Node.js-процес моделює фізичний датчик: генерує показники (температура, вологість), приймає команди керування, публікує стан по MQTT.',
  },
  broker: {
    title: 'MQTT-брокер',
    text: 'Незалежний посередник (Aedes/Mosquitto). Пристрої публікують у теми (devices/id/readings), backend підписується — жодного прямого з\'єднання пристрій↔backend.',
  },
  backend: {
    title: 'Node.js + Express backend',
    text: 'Міст між світами: підписується на MQTT, транслює дані у браузер через WebSocket (Socket.IO), приймає REST-запити історії, перевіряє автентифікацію.',
  },
  frontend: {
    title: 'Vue.js SPA',
    text: 'Реактивний інтерфейс: Pinia зберігає стан пристроїв, Vue Router керує навігацією, REST — для початкового завантаження, WebSocket — для оновлень у реальному часі.',
  },
  pwa: {
    title: 'PWA-шар',
    text: 'Web App Manifest робить застосунок встановлюваним, Service Worker додає офлайн-кешування, Push API — сповіщення навіть коли застосунок закритий.',
  },
}

const ORDER = ['device', 'broker', 'backend', 'frontend', 'pwa']

export default function ArchitectureFlow() {
  const [sel, setSel] = useState('backend')
  const d = STAGES[sel]

  return (
    <div className="widget">
      <h3>Архітектура курсу — натисніть на елемент</h3>
      <div className="arch">
        <svg viewBox="0 0 620 140" role="img" aria-label="Архітектура пристрій-backend-PWA">
          {ORDER.map((id, i) => {
            const x = 10 + i * 124
            const colors = { device: '#0e7a5f', broker: '#6a4a1e', backend: '#0a5f9c', frontend: '#4a2f5a', pwa: '#8a1e3a' }
            return (
              <g key={id}>
                <g className="lvl" onClick={() => setSel(id)}>
                  <rect x={x} y="30" width="110" height="70" rx="10" fill={colors[id]}
                    opacity={sel === id ? 1 : 0.82} stroke={sel === id ? '#fff' : 'transparent'} strokeWidth="2" />
                  <text x={x + 55} y="70" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
                    {STAGES[id].title.split(' ').slice(0, 2).join(' ')}
                  </text>
                </g>
                {i < ORDER.length - 1 && (
                  <text x={x + 117} y="70" textAnchor="middle" fill="var(--muted)" fontSize="16">→</text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
      <div className="arch-desc">
        <b>{d.title}.</b> {d.text}
      </div>
    </div>
  )
}

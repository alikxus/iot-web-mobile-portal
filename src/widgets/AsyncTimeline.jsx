import { useState } from 'react'

const SCENARIOS = {
  sync: {
    label: 'Синхронний код',
    steps: ['Рядок 1: console.log("A")', 'Рядок 2: console.log("B")', 'Рядок 3: console.log("C")'],
    order: [0, 1, 2],
    note: 'Кожен рядок виконується по черзі, блокуючи наступний до завершення попереднього.',
  },
  callback: {
    label: 'Callback',
    steps: ['setTimeout(fn, 1000)', 'console.log("Це виконається ПЕРШИМ")', 'fn(): console.log("А це — через 1с")'],
    order: [0, 1, 2],
    note: 'Виклик setTimeout негайно повертає керування — рядок 2 виконується до того, як спрацює callback.',
  },
  async: {
    label: 'async/await',
    steps: ['await fetchData()', '(пауза виконання ЦІЄЇ функції)', 'наступний рядок після даних'],
    order: [0, 1, 2],
    note: 'await призупиняє лише поточну async-функцію — решта програми продовжує працювати паралельно.',
  },
}

export default function AsyncTimeline() {
  const [mode, setMode] = useState('async')
  const s = SCENARIOS[mode]

  return (
    <div className="widget">
      <h3>Порядок виконання асинхронного коду</h3>
      <div className="tabs">
        {Object.entries(SCENARIOS).map(([key, v]) => (
          <button key={key} className={`tab ${mode === key ? 'active' : ''}`} onClick={() => setMode(key)}>
            {v.label}
          </button>
        ))}
      </div>
      <ol className="steps">
        {s.steps.map((step, i) => (
          <li key={i}><code>{step}</code></li>
        ))}
      </ol>
      <p className="hint">{s.note}</p>
    </div>
  )
}

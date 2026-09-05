import { useState } from 'react'

const STRATEGIES = {
  cacheFirst: 'Cache First',
  networkFirst: 'Network First',
  swr: 'Stale While Revalidate',
}

function simulate(strategy, isOnline) {
  if (strategy === 'cacheFirst') {
    return { source: 'кеш', speed: 'миттєво', note: 'Мережа не викликається взагалі, поки є кеш — швидко, але може бути застарілим.' }
  }
  if (strategy === 'networkFirst') {
    if (isOnline) return { source: 'мережа', speed: 'з затримкою', note: 'Дані свіжі, кеш оновлюється на майбутнє.' }
    return { source: 'кеш (fallback)', speed: 'миттєво', note: 'Мережа недоступна — використано останню закешовану відповідь.' }
  }
  // swr
  return { source: isOnline ? 'кеш, потім оновлення в мережі' : 'лише кеш', speed: 'миттєво', note: 'Стара відповідь показується одразу, паралельно (якщо є мережа) кеш оновлюється для наступного разу.' }
}

export default function CacheStrategyDemo() {
  const [strategy, setStrategy] = useState('networkFirst')
  const [isOnline, setIsOnline] = useState(true)
  const result = simulate(strategy, isOnline)

  return (
    <div className="widget">
      <h3>Стратегії кешування Service Worker</h3>

      <div className="tabs">
        {Object.entries(STRATEGIES).map(([key, label]) => (
          <button key={key} className={`tab ${strategy === key ? 'active' : ''}`} onClick={() => setStrategy(key)}>
            {label}
          </button>
        ))}
      </div>

      <div className="seg">
        <button className={isOnline ? 'on' : ''} onClick={() => setIsOnline(true)}>Мережа є</button>
        <button className={!isOnline ? 'on' : ''} onClick={() => setIsOnline(false)}>Мережі немає</button>
      </div>

      <div className={`verdict ${isOnline || result.source.includes('кеш') ? 'ok' : 'bad'}`}>
        Джерело відповіді: <b>{result.source}</b> ({result.speed})
      </div>
      <p className="hint">{result.note}</p>
    </div>
  )
}

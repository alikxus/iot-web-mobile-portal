import Quiz from '../components/Quiz.jsx'
import CacheStrategyDemo from '../widgets/CacheStrategyDemo.jsx'

const QUESTIONS = [
  {
    q: '1. Чому Service Worker не може кешувати WebSocket-трафік?',
    opts: [
      { t: 'Кешування стосується HTTP request/response, а WebSocket — постійний потік, не окремі запити', ok: true },
      { t: 'WebSocket взагалі не використовує мережу', ok: false },
      { t: 'Це обмеження лише в Chrome', ok: false },
    ],
    ex: 'Це принципове архітектурне обмеження — офлайн-статус WebSocket-даних треба показувати окремо (індикатор з\'єднання).',
  },
]

export default function Lecture12() {
  return (
    <article>
      <div className="kicker">Лекція 12</div>
      <h1>Service Workers: кешування, офлайн-режим</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти життєвий цикл Service Worker і стратегії кешування.</li>
        </ul>
      </div>

      <h2>Життєвий цикл</h2>
      <pre className="code"><code>{`self.addEventListener("install", (e) => e.waitUntil(caches.open(NAME).then(c => c.addAll(FILES))));
self.addEventListener("fetch", (e) => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));`}</code></pre>

      <CacheStrategyDemo />

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекцією 11) — <b>Лаб. 5</b>.</p>
    </article>
  )
}

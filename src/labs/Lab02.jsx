import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому backend підписується на devices/+/readings, а не окремо на кожен пристрій?',
    opts: [
      { t: 'Wildcard автоматично охоплює будь-яку кількість пристроїв без зміни коду', ok: true },
      { t: 'Це вимога протоколу MQTT для будь-якої підписки', ok: false },
      { t: 'Без wildcard MQTT не працює взагалі', ok: false },
    ],
    ex: 'Масштабованість — головна перевага іменованих тем з wildcards.',
  },
]

export default function Lab02() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 2</div>
      <h1>Реальний час: WebSocket/MQTT між емулятором і backend</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>5-7</div>
        <div><b>Інструменти</b>aedes, mqtt, socket.io</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Підняти локальний MQTT-брокер, перевести емулятор на публікацію по MQTT, backend транслює у браузер через WebSocket.</li>
        </ul>
      </div>

      <h2>Ключові кроки</h2>
      <ol className="steps">
        <li>Локальний брокер на Aedes (<code>net.createServer(aedes.handle)</code>).</li>
        <li>Емулятор публікує показники, підписується на команди, налаштовує LWT.</li>
        <li>Backend підписується на <code>devices/+/readings</code>, транслює через <code>io.emit</code>.</li>
        <li>Команди у зворотному напрямку: браузер → WebSocket → backend → MQTT → пристрій.</li>
      </ol>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />
    </article>
  )
}

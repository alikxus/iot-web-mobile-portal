import Quiz from '../components/Quiz.jsx'
import MqttTopicMatcher from '../widgets/MqttTopicMatcher.jsx'

const QUESTIONS = [
  {
    q: '1. Чому REST не дозволяє серверу самому надіслати дані клієнту?',
    opts: [
      { t: 'HTTP побудований на моделі запит-відповідь: клієнт завжди ініціює, з\'єднання потім закривається', ok: true },
      { t: 'REST технічно не підтримує JSON', ok: false },
      { t: 'Сервери не мають дозволу відправляти дані взагалі', ok: false },
    ],
    ex: 'Саме тому для реального часу потрібні WebSocket (постійне з\'єднання) чи MQTT (publish/subscribe).',
  },
  {
    q: '2. Чим MQTT відрізняється від WebSocket архітектурно?',
    opts: [
      { t: 'MQTT — publish/subscribe через брокер; WebSocket — пряме двостороннє з\'єднання клієнт-сервер', ok: true },
      { t: 'Це синоніми одного протоколу', ok: false },
      { t: 'MQTT працює лише в браузері', ok: false },
    ],
    ex: 'У MQTT видавці й підписники не знають одне про одного напряму; у WebSocket є рівно дві сторони з\'єднання.',
  },
]

export default function Lecture05() {
  return (
    <article>
      <div className="kicker">Лекція 5</div>
      <h1>Протоколи реального часу: WebSocket vs MQTT</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти обмеження HTTP і коли обирати WebSocket, а коли MQTT.</li>
        </ul>
      </div>

      <h2>Порівняння</h2>
      <table className="data">
        <thead><tr><th>Критерій</th><th>WebSocket</th><th>MQTT</th></tr></thead>
        <tbody>
          <tr><td>Модель</td><td>клієнт-сервер</td><td>publish/subscribe через брокер</td></tr>
          <tr><td>Застосування</td><td>браузер ↔ сервер</td><td>пристрій ↔ backend</td></tr>
          <tr><td>Накладні витрати</td><td>більші</td><td>мінімальні (від 2 байт)</td></tr>
        </tbody>
      </table>

      <p>Спробуйте, як шаблони підписки з wildcards <code>+</code>/<code>#</code> відповідають темам наших пристроїв:</p>
      <MqttTopicMatcher />

      <h2>Архітектурне рішення курсу</h2>
      <p>MQTT — між пристроєм і backend; WebSocket (Socket.IO) — між backend і браузером. Backend виконує роль "перекладача".</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекціями 6-7) — <b>Лаб. 2</b>: WebSocket/MQTT реальний час.</p>
    </article>
  )
}

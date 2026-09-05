import Quiz from '../components/Quiz.jsx'
import ArchitectureFlow from '../widgets/ArchitectureFlow.jsx'

const QUESTIONS = [
  {
    q: '1. Чому PWA дозволяє уникнути окремої нативної мобільної розробки?',
    opts: [
      { t: 'Той самий веб-застосунок можна "встановити" на телефон — з іконкою, офлайн-роботою, push', ok: true },
      { t: 'PWA автоматично компілюється в нативний код Android/iOS', ok: false },
      { t: 'PWA працює лише на iPhone', ok: false },
    ],
    ex: 'PWA перевикористовує веб-технології (HTML/CSS/JS) для отримання можливостей, раніше доступних лише нативним застосункам — без окремих кодових баз під кожну платформу.',
  },
  {
    q: '2. Чому весь стек курсу побудований на JavaScript/Node.js?',
    opts: [
      { t: 'Один синтаксис для backend, IoT-емуляції й frontend; асинхронність за замовчуванням природно підходить для IoT', ok: true },
      { t: 'JavaScript — єдина мова, яка взагалі підтримує мережу', ok: false },
      { t: 'Node.js обов\'язковий для будь-якого веб-сайту', ok: false },
    ],
    ex: 'Node.js дозволяє використовувати одну мову для всього стеку — від емуляції пристроїв до backend і frontend — спрощуючи навчання й перевикористання коду.',
  },
]

export default function Lecture01() {
  return (
    <article>
      <div className="kicker">Лекція 1</div>
      <h1>Вступ до веб-програмування IoT та мобільних додатків</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти, як пов'язані IoT, веб-програмування й мобільна розробка.</li>
          <li>Знати архітектуру курсу: пристрій → backend → PWA.</li>
        </ul>
      </div>

      <h2>Три складові курсу</h2>
      <p>
        IoT-пристрій генерує дані → Node.js backend їх приймає й обробляє → Vue.js frontend показує в реальному часі →
        той самий frontend, обгорнутий у PWA, стає "мобільним застосунком" без окремої мобільної розробки.
      </p>

      <ArchitectureFlow />

      <h2>Технологічний стек</h2>
      <table className="data">
        <thead><tr><th>Шар</th><th>Технологія</th></tr></thead>
        <tbody>
          <tr><td>IoT-пристрій</td><td>Node.js (емулятор)</td></tr>
          <tr><td>Транспорт реального часу</td><td>MQTT / WebSocket</td></tr>
          <tr><td>Backend</td><td>Node.js + Express</td></tr>
          <tr><td>Frontend</td><td>Vue.js</td></tr>
          <tr><td>Мобільна платформа</td><td>PWA (Manifest + Service Worker)</td></tr>
        </tbody>
      </table>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення — <b>Лаб. 1</b>: Backend REST API + перший Node.js IoT-емулятор.</p>
    </article>
  )
}

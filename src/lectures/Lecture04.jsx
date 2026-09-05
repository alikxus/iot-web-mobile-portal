import Quiz from '../components/Quiz.jsx'
import HttpRequestBuilder from '../widgets/HttpRequestBuilder.jsx'

const QUESTIONS = [
  {
    q: '1. Чому Node.js ефективно обробляє тисячі одночасних з\'єднань одним потоком?',
    opts: [
      { t: 'Неблокуючий ввід-вивід: повільні операції делегуються ОС, потік не "заморожується" на очікуванні', ok: true },
      { t: 'Node.js насправді використовує тисячі окремих потоків приховано', ok: false },
      { t: 'Node.js обмежений лише 10 з\'єднаннями', ok: false },
    ],
    ex: 'Event loop дозволяє обробляти багато запитів, що переважно чекають на мережу/диск, не блокуючи інші запити.',
  },
  {
    q: '2. Що робить middleware в Express?',
    opts: [
      { t: 'Виконується послідовно для кожного запиту перед фінальним обробником (логування, парсинг, автентифікація)', ok: true },
      { t: 'Замінює базу даних', ok: false },
      { t: 'Використовується лише для CSS', ok: false },
    ],
    ex: 'Middleware — наскрізна логіка (app.use(...)) що обробляється до того, як запит досягне маршруту.',
  },
]

export default function Lecture04() {
  return (
    <article>
      <div className="kicker">Лекція 4</div>
      <h1>Основи Node.js та Express — REST API</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти event loop Node.js і принципи REST API з Express.</li>
        </ul>
      </div>

      <h2>Express: маршрутизація та middleware</h2>
      <pre className="code"><code>{`app.get("/api/devices/:id", (req, res) => {
    res.json({ id: req.params.id, status: "online" });
});

app.use(express.json()); // middleware для розбору JSON`}</code></pre>

      <h2>Принципи REST</h2>
      <ul>
        <li>Ресурси ідентифікуються URL: <code>/api/devices/42</code></li>
        <li>Методи визначають дію: GET/POST/PUT/DELETE</li>
        <li>Статус-коди повідомляють результат: 200, 201, 400, 404, 500</li>
        <li>Без збереження стану (stateless)</li>
      </ul>

      <HttpRequestBuilder />

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення — <b>Лаб. 1</b>: Backend REST API + Node.js IoT-емулятор.</p>
    </article>
  )
}

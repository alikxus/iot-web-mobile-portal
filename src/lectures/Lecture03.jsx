import Quiz from '../components/Quiz.jsx'
import AsyncTimeline from '../widgets/AsyncTimeline.jsx'

const QUESTIONS = [
  {
    q: '1. Що таке "callback hell" і як його вирішує Promise?',
    opts: [
      { t: 'Глибока вкладеність callback-функцій при послідовних асинхронних операціях; Promise дозволяє ланцюжки .then()', ok: true },
      { t: 'Це помилка синтаксису, яку виправляє компілятор', ok: false },
      { t: 'Callback hell — назва бібліотеки для асинхронності', ok: false },
    ],
    ex: 'Кожен вкладений callback зсуває код праворуч; Promise.then() дозволяє записати ту саму логіку послідовно, без вкладеності.',
  },
  {
    q: '2. Чим Promise.all() кращий за послідовні await у циклі для незалежних операцій?',
    opts: [
      { t: 'Виконує їх паралельно, а не одну за одною — значно швидше для незалежних задач', ok: true },
      { t: 'Promise.all() працює лише з одним проміс за раз', ok: false },
      { t: 'Різниці немає', ok: false },
    ],
    ex: 'Опитування 5 незалежних пристроїв послідовно займає у 5 разів більше часу, ніж паралельно через Promise.all().',
  },
]

export default function Lecture03() {
  return (
    <article>
      <div className="kicker">Лекція 3</div>
      <h1>Асинхронність у JavaScript та ES6+</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти еволюцію асинхронного коду: callback → Promise → async/await.</li>
        </ul>
      </div>

      <AsyncTimeline />

      <h2>async/await — стандарт курсу</h2>
      <pre className="code"><code>{`async function loadDeviceReport(id) {
    try {
        const data = await fetchDeviceData(id);
        await saveToDatabase(data);
    } catch (err) {
        console.error(err);
    }
}`}</code></pre>

      <h2>Promise.all — паралельне виконання</h2>
      <pre className="code"><code>{`const results = await Promise.all(deviceIds.map(fetchDeviceData));`}</code></pre>

      <h2>ES6 модулі та класи</h2>
      <pre className="code"><code>{`export function add(a, b) { return a + b; }
import { add } from "./mathUtils.js";

class Device {
    constructor(id) { this.id = id; }
}`}</code></pre>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">Ці концепції — фундамент для Node.js/Express (лекція 4) і всієї подальшої роботи з мережею.</p>
    </article>
  )
}

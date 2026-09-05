import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чим GET відрізняється від POST з точки зору семантики REST?',
    opts: [
      { t: 'GET — отримання даних без побічних ефектів; POST — створення нового ресурсу/дії зі зміною стану', ok: true },
      { t: 'Це просто дві назви одного й того самого', ok: false },
      { t: 'GET повільніший за POST', ok: false },
    ],
    ex: 'GET має бути "безпечним" (не змінює стан сервера), POST типово створює або змінює дані.',
  },
]

export default function Lab01() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 1</div>
      <h1>Backend REST API + перший Node.js IoT-емулятор</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>4-6</div>
        <div><b>Інструменти</b>Node.js, Express</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Створити Express-сервер з REST API та Node.js-емулятор, що періодично надсилає дані.</li>
        </ul>
      </div>

      <h2>Ключові кроки</h2>
      <ol className="steps">
        <li>Мінімальний Express-сервер з <code>GET /api/status</code> і <code>POST /api/readings</code>.</li>
        <li>Емулятор — окремий Node.js-процес, що надсилає HTTP POST кожні 2 секунди.</li>
        <li>Додати <code>GET /api/history</code> (останні 20 показів) і <code>POST /api/commands</code>.</li>
        <li>Валідація вхідних даних, обробка помилки з'єднання.</li>
      </ol>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />
    </article>
  )
}

import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому JWT-токен передається в заголовку Authorization, а не в тілі кожного запиту?',
    opts: [
      { t: 'Це стандартна конвенція HTTP для автентифікації, підтримувана всіма клієнтами/бібліотеками', ok: true },
      { t: 'Тіло запиту не може містити текстові дані', ok: false },
      { t: 'Заголовки шифруються, а тіло — ні', ok: false },
    ],
    ex: 'Authorization: Bearer &lt;token&gt; — визнаний стандарт, який middleware типово очікує саме там.',
  },
]

export default function Lab06() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 6</div>
      <h1>Push-сповіщення, Background Sync, безпека</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>13-14</div>
        <div><b>Інструменти</b>web-push, VAPID, JWT</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Реалізувати push-сповіщення при критичних подіях і базову JWT-автентифікацію API.</li>
        </ul>
      </div>

      <h2>Ключові кроки</h2>
      <ol className="steps">
        <li>Підписка клієнта на push через <code>pushManager.subscribe()</code> з VAPID-ключами.</li>
        <li>Backend надсилає push при перевищенні порогу (напр. температура) через <code>web-push</code>.</li>
        <li>JWT-автентифікація REST API та WebSocket-з'єднання (middleware).</li>
        <li>Налаштування CORS і валідація вхідних команд.</li>
      </ol>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />
    </article>
  )
}

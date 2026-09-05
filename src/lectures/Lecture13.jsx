import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому push-повідомлення проходять через push-сервіс браузера, а не напряму від нашого сервера?',
    opts: [
      { t: 'Пристрій користувача може бути офлайн чи в мережі, недоступній ззовні; push-сервіс гарантує доставку, коли пристрій з\'явиться в мережі', ok: true },
      { t: 'Це вимога GDPR', ok: false },
      { t: 'Push-сервіс лише для реклами', ok: false },
    ],
    ex: 'Наш сервер ніколи не з\'єднується з браузером напряму — весь push проходить через інфраструктуру Google/Mozilla.',
  },
]

export default function Lecture13() {
  return (
    <article>
      <div className="kicker">Лекція 13</div>
      <h1>Push-повідомлення та Background Sync</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Реалізувати підписку на push і показ сповіщень навіть при закритому застосунку.</li>
        </ul>
      </div>

      <h2>Три учасники push</h2>
      <p>Наш backend → Push-сервіс браузера (Google FCM тощо) → Service Worker користувача.</p>

      <h2>Підписка (клієнт)</h2>
      <pre className="code"><code>{`const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: VAPID_PUBLIC_KEY,
});`}</code></pre>

      <h2>Показ сповіщення (Service Worker)</h2>
      <pre className="code"><code>{`self.addEventListener("push", (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, { body: data.body });
});`}</code></pre>

      <h2>Background Sync</h2>
      <p>Відкладає дію (напр. команду керування) до відновлення мережі — обмежена підтримка браузерів.</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекцією 14) — <b>Лаб. 6</b>.</p>
    </article>
  )
}

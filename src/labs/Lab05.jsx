import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Які три умови обов\'язкові для встановлюваності PWA?',
    opts: [
      { t: 'HTTPS, коректний manifest.json, зареєстрований Service Worker', ok: true },
      { t: 'Лише наявність іконки 512×512', ok: false },
      { t: 'Реєстрація в Google Play', ok: false },
    ],
    ex: 'Усі три критерії мають виконуватись одночасно — браузер перевіряє їх перед показом підказки встановлення.',
  },
]

export default function Lab05() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 5</div>
      <h1>Перетворення на PWA: manifest, встановлення, офлайн</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>11-12</div>
        <div><b>Інструменти</b>vite-plugin-pwa, Service Worker</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Додати Web App Manifest, зареєструвати Service Worker, реалізувати офлайн-кешування статичних ресурсів.</li>
        </ul>
      </div>

      <h2>Ключові кроки</h2>
      <ol className="steps">
        <li>Створити <code>manifest.json</code> (назва, іконки, theme_color, display: standalone).</li>
        <li>Підключити <code>vite-plugin-pwa</code> або написати власний <code>sw.js</code>.</li>
        <li>Реалізувати Cache First для статики, Network First для REST-запитів історії.</li>
        <li>Перевірити встановлення застосунку на телефоні/десктопі та роботу без мережі.</li>
      </ol>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />
    </article>
  )
}

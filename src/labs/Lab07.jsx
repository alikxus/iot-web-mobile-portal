import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому Nginx повинен віддавати index.html для будь-якого невідомого шляху в SPA?',
    opts: [
      { t: 'Vue Router обробляє маршрути на клієнті — фізичних файлів на сервері для /device/sensor1 не існує', ok: true },
      { t: 'Це прискорює завантаження CSS', ok: false },
      { t: 'Стосується лише API-запитів', ok: false },
    ],
    ex: 'try_files $uri /index.html — стандартне налаштування для будь-якого SPA на Nginx.',
  },
]

export default function Lab07() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 7 · Підсумковий проект</div>
      <h1>Повний ланцюжок: емулятор → MQTT/WebSocket → Vue.js PWA</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>15 (підсумок усього курсу)</div>
        <div><b>Формат</b>захист повного проекту</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Зібрати весь курс в один робочий проєкт і продемонструвати повний цикл, з розгортанням (хоча б локальним).</li>
        </ul>
      </div>

      <h2>Вимоги до захисту</h2>
      <ul>
        <li>Запущений IoT-емулятор, MQTT-брокер, Express backend з автентифікацією.</li>
        <li>Vue.js PWA: дашборд у реальному часі, керування пристроєм, встановлюваність, офлайн-режим.</li>
        <li>Демонстрація push-сповіщення при критичній події.</li>
        <li>Коротка презентація архітектури й труднощів реалізації (3-5 хв).</li>
      </ul>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />

      <p className="footer-note">🎓 Це фінальна лабораторна курсу. Успіхів на захисті!</p>
    </article>
  )
}

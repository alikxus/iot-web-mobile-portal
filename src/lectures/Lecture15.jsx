import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому важливо try_files $uri /index.html в Nginx для нашого Vue-застосунку?',
    opts: [
      { t: 'SPA-маршрути (/device/sensor1) не існують як реальні файли на сервері — Vue Router обробляє їх на клієнті, тому Nginx завжди має віддавати index.html', ok: true },
      { t: 'Це прискорює завантаження зображень', ok: false },
      { t: 'Потрібно лише для API-запитів', ok: false },
    ],
    ex: 'Без цього налаштування пряме відкриття URL типу /device/sensor1 поверне 404 від Nginx, хоча в застосунку такий маршрут існує.',
  },
]

export default function Lecture15() {
  return (
    <article>
      <div className="kicker">Лекція 15</div>
      <h1>Розгортання та підсумок курсу</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розгорнути backend, MQTT-брокер і Vue frontend у продакшн-середовищі.</li>
        </ul>
      </div>

      <h2>Nginx як reverse proxy</h2>
      <pre className="code"><code>{`location /socket.io/ {
    proxy_pass http://localhost:3000;
    proxy_set_header Upgrade $http_upgrade; # обов'язково для WebSocket
}
location / {
    root /var/www/dashboard/dist;
    try_files $uri /index.html; # SPA-маршрутизація
}`}</code></pre>

      <h2>Підсумок: повний шлях даних</h2>
      <table className="data">
        <thead><tr><th>Компонент</th><th>Роль</th></tr></thead>
        <tbody>
          <tr><td>IoT-емулятор</td><td>Генерує дані, приймає команди</td></tr>
          <tr><td>MQTT-брокер</td><td>Розподіляє повідомлення</td></tr>
          <tr><td>Express backend</td><td>REST, міст MQTT↔WebSocket, авторизація</td></tr>
          <tr><td>Vue.js frontend</td><td>Реактивний UI, Pinia, Router</td></tr>
          <tr><td>PWA-шар</td><td>Встановлюваність, офлайн, push</td></tr>
        </tbody>
      </table>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🎓 Фінальна лабораторна курсу — <b>Лаб. 7</b>: підсумковий проект, повний ланцюжок + деплой + захист.</p>
    </article>
  )
}

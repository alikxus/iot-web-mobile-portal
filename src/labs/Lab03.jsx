import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Навіщо на детальній сторінці пристрою потрібен і REST, і WebSocket одночасно?',
    opts: [
      { t: 'REST — початкова історія при завантаженні; WebSocket — подальші живі оновлення', ok: true },
      { t: 'REST застарів', ok: false },
      { t: 'WebSocket не може передавати числа', ok: false },
    ],
    ex: 'Кожен протокол вирішує окрему задачу — разом вони дають повну картину.',
  },
]

export default function Lab03() {
  return (
    <article>
      <div className="kicker">Лабораторна робота 3</div>
      <h1>Vue.js-дашборд для живих IoT-даних</h1>

      <div className="lab-meta">
        <div><b>Лекції</b>8-10</div>
        <div><b>Інструменти</b>Vite, Vue 3, Pinia, Vue Router, Chart.js</div>
        <div><b>Обсяг</b>~7 год</div>
      </div>

      <div className="goals">
        <b>Мета роботи</b>
        <ul>
          <li>Побудувати SPA-дашборд, що показує пристрої в реальному часі через Pinia і WebSocket, з детальною сторінкою й графіком.</li>
        </ul>
      </div>

      <h2>Ключові кроки</h2>
      <ol className="steps">
        <li>Pinia-сховище <code>useDevicesStore</code> з методом <code>connect()</code>.</li>
        <li>Компонент <code>DeviceCard</code> + <code>DashboardView</code> зі списком пристроїв.</li>
        <li><code>DeviceDetailView</code>: REST-історія + WebSocket-оновлення + Chart.js графік.</li>
        <li>Vue Router: <code>/</code> і <code>/device/:id</code>.</li>
      </ol>

      <Quiz title="✅ Контрольні питання" questions={QUESTIONS} />
    </article>
  )
}

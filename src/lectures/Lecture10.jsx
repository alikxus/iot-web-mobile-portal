import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому компонент використовує і REST, і WebSocket одночасно?',
    opts: [
      { t: 'REST — для початкового/історичного завантаження; WebSocket — для подальших оновлень у реальному часі', ok: true },
      { t: 'REST застарів і не використовується', ok: false },
      { t: 'WebSocket не вміє передавати числа', ok: false },
    ],
    ex: 'Кожен протокол вирішує свою задачу — комбінація дає і швидкий старт, і живі оновлення.',
  },
]

export default function Lecture10() {
  return (
    <article>
      <div className="kicker">Лекція 10</div>
      <h1>Взаємодія Vue.js з backend: REST + WebSocket</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Комбінувати REST (початковий стан) і WebSocket (оновлення) в одному компоненті.</li>
        </ul>
      </div>

      <h2>Стандартний патерн</h2>
      <pre className="code"><code>{`onMounted(async () => {
    history.value = await loadDeviceHistory(id);   // Крок 1: REST
    socket = io(url);
    socket.on("device_update", (msg) => history.value.push(msg)); // Крок 2: WebSocket
});
onUnmounted(() => socket?.disconnect());`}</code></pre>

      <h2>Стани завантаження</h2>
      <pre className="code"><code>{`<p v-if="isLoading">Завантаження...</p>
<p v-else-if="error">Помилка: {{ error }}</p>
<ul v-else>...</ul>`}</code></pre>

      <h2>Індикація з'єднання</h2>
      <pre className="code"><code>{`socket.on("disconnect", () => connectionStatus.value = "disconnected");`}</code></pre>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекціями 8-9) — <b>Лаб. 3</b> та <b>Лаб. 4</b>.</p>
    </article>
  )
}

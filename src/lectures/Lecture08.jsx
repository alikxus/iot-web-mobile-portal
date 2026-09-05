import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Що таке "реактивність" у Vue?',
    opts: [
      { t: 'Зміна даних автоматично оновлює DOM, без ручних маніпуляцій innerHTML', ok: true },
      { t: 'Це синонім до "швидкий рендеринг"', ok: false },
      { t: 'Реактивність працює лише для форм', ok: false },
    ],
    ex: 'ref() створює реактивну змінну — Vue сам відстежує її використання й оновлює відповідні місця DOM.',
  },
  {
    q: '2. Як передаються дані між батьківським і дочірнім компонентом?',
    opts: [
      { t: 'Через props — однонаправлений потік даних згори вниз', ok: true },
      { t: 'Дочірній компонент читає глобальні змінні window', ok: false },
      { t: 'Дані передаються лише через localStorage', ok: false },
    ],
    ex: 'Props роблять потік даних передбачуваним: завжди від батька до дитини.',
  },
]

export default function Lecture08() {
  return (
    <article>
      <div className="kicker">Лекція 8</div>
      <h1>Основи Vue.js — реактивність, компоненти, директиви</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розуміти реактивність, Composition API, директиви Vue.</li>
        </ul>
      </div>

      <h2>Реактивність</h2>
      <pre className="code"><code>{`const temperature = ref(22.5);
// <p>{{ temperature }}°C</p> -- оновиться автоматично при temperature.value = 25`}</code></pre>

      <h2>Директиви</h2>
      <table className="data">
        <thead><tr><th>Директива</th><th>Призначення</th></tr></thead>
        <tbody>
          <tr><td>v-if / v-else</td><td>умовний рендеринг</td></tr>
          <tr><td>v-for</td><td>рендеринг списку</td></tr>
          <tr><td>:  (v-bind)</td><td>прив'язка атрибута</td></tr>
          <tr><td>@ (v-on)</td><td>обробка подій</td></tr>
          <tr><td>v-model</td><td>двостороння прив'язка</td></tr>
        </tbody>
      </table>

      <h2>computed та життєвий цикл</h2>
      <pre className="code"><code>{`const isOverheating = computed(() => temperature.value > 30);

onMounted(() => { /* відкрити WebSocket */ });
onUnmounted(() => { /* закрити з'єднання */ });`}</code></pre>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекціями 9-10) — <b>Лаб. 3</b>: Vue.js-дашборд.</p>
    </article>
  )
}

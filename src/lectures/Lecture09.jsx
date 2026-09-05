import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Яку проблему вирішує Pinia?',
    opts: [
      { t: '"Prop drilling" — незручність передачі даних через довгий ланцюжок непов\'язаних компонентів', ok: true },
      { t: 'Проблеми з CSS-стилями', ok: false },
      { t: 'Повільну роботу мережі', ok: false },
    ],
    ex: 'Централізоване сховище дозволяє будь-якому компоненту звертатись до стану напряму, незалежно від позиції в дереві.',
  },
  {
    q: '2. Що робить Vue Router без перезавантаження сторінки?',
    opts: [
      { t: 'Змінює відображуваний компонент за URL — це і є Single Page Application (SPA)', ok: true },
      { t: 'Завантажує нову HTML-сторінку з сервера щоразу', ok: false },
      { t: 'Router не впливає на відображення', ok: false },
    ],
    ex: 'SPA-навігація — фундаментальна передумова швидкої роботи PWA.',
  },
]

export default function Lecture09() {
  return (
    <article>
      <div className="kicker">Лекція 9</div>
      <h1>Vue.js: Pinia та Vue Router</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Керувати спільним станом через Pinia; навігація через Vue Router.</li>
        </ul>
      </div>

      <h2>Pinia Setup Store</h2>
      <pre className="code"><code>{`export const useDevicesStore = defineStore("devices", () => {
    const devices = ref({});
    const onlineCount = computed(() => Object.values(devices.value).filter(d => d.online).length);
    function updateDevice(id, data) { devices.value[id] = { ...devices.value[id], ...data }; }
    return { devices, onlineCount, updateDevice };
});`}</code></pre>

      <h2>Vue Router</h2>
      <pre className="code"><code>{`const routes = [
    { path: "/", component: DashboardView },
    { path: "/device/:id", component: DeviceDetailView },
];`}</code></pre>

      <p>Параметр <code>:id</code> — так само, як в Express-маршрутах (лекція 4) — доступний через <code>useRoute().params.id</code>.</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекціями 8, 10) — <b>Лаб. 3</b>.</p>
    </article>
  )
}

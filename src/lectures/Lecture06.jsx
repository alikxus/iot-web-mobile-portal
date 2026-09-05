import Quiz from '../components/Quiz.jsx'
import LiveDeviceEmulator from '../widgets/LiveDeviceEmulator.jsx'

const QUESTIONS = [
  {
    q: '1. Навіщо емулювати мережеві проблеми (втрату пакетів, затримку)?',
    opts: [
      { t: 'Код, що працює лише в ідеальних умовах, ламається на реальних пристроях — тестування проти "недосконалого" емулятора привчає до стійкості', ok: true },
      { t: 'Це чисто естетичний прийом', ok: false },
      { t: 'Реальні мережі завжди ідеальні', ok: false },
    ],
    ex: 'Симуляція втрати пакетів і затримки готує розробника до реальних умов IoT-зв\'язку.',
  },
]

export default function Lecture06() {
  return (
    <article>
      <div className="kicker">Лекція 6</div>
      <h1>Емуляція IoT-пристроїв на Node.js</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Писати реалістичні емулятори: модель стану + цикл оновлення + транспорт.</li>
        </ul>
      </div>

      <LiveDeviceEmulator />

      <h2>Клас емулятора</h2>
      <pre className="code"><code>{`class DeviceEmulator {
    constructor(id) { this.id = id; this.temperature = 22; }
    tick() { this.temperature += (Math.random() - 0.5) * 0.3; }
    getState() { return { id: this.id, temperature: this.temperature }; }
    handleCommand(cmd) { /* реакція на керування */ }
}`}</code></pre>

      <h2>Кілька одночасних пристроїв</h2>
      <pre className="code"><code>{`const devices = ["s1", "s2", "s3"].map(id => new DeviceEmulator(id));
setInterval(() => devices.forEach(d => { d.tick(); publish(d.getState()); }), 1000);`}</code></pre>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекціями 5, 7) — <b>Лаб. 2</b>.</p>
    </article>
  )
}

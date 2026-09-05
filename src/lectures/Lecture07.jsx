import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Навіщо backend підписується на devices/+/readings, а не на конкретні теми кожного пристрою?',
    opts: [
      { t: 'Wildcard "+" автоматично охоплює будь-який пристрій, чия тема відповідає шаблону, без потреби знати список наперед', ok: true },
      { t: '"+"" прискорює мережу', ok: false },
      { t: 'Це синтаксична вимога MQTT без практичного сенсу', ok: false },
    ],
    ex: 'Wildcard-підписка масштабується на будь-яку кількість пристроїв без зміни коду backend.',
  },
  {
    q: '2. Що робить Last Will and Testament (LWT)?',
    opts: [
      { t: 'Брокер автоматично публікує задане повідомлення, якщо клієнт відключається неочікувано', ok: true },
      { t: 'Видаляє всі повідомлення пристрою з брокера', ok: false },
      { t: 'Шифрує з\'єднання', ok: false },
    ],
    ex: 'LWT дозволяє дізнатись про втрату зв\'язку з пристроєм навіть без heartbeat-механізму.',
  },
]

export default function Lecture07() {
  return (
    <article>
      <div className="kicker">Лекція 7</div>
      <h1>MQTT-брокер та інтеграція з backend</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Розгортати MQTT-брокер (Aedes/Mosquitto) і зв'язувати його з Express через WebSocket.</li>
        </ul>
      </div>

      <h2>Backend як міст MQTT↔WebSocket</h2>
      <pre className="code"><code>{`mqttClient.subscribe("devices/+/readings");
mqttClient.on("message", (topic, message) => {
    const deviceId = topic.split("/")[1];
    io.emit("device_update", { deviceId, ...JSON.parse(message) });
});`}</code></pre>

      <h2>Схема тем</h2>
      <pre className="code"><code>{`devices/{id}/readings   — дані від пристрою
devices/{id}/commands   — команди пристрою
devices/{id}/status     — онлайн/офлайн (retained)`}</code></pre>

      <h2>Last Will and Testament</h2>
      <pre className="code"><code>{`mqtt.connect(url, {
    will: { topic: \`devices/\${id}/status\`, payload: '{"online":false}', retain: true }
});`}</code></pre>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення — <b>Лаб. 2</b>: WebSocket/MQTT реальний час.</p>
    </article>
  )
}

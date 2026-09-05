import Quiz from '../components/Quiz.jsx'

const QUESTIONS = [
  {
    q: '1. Чому в курсі використовується let/const, а не var?',
    opts: [
      { t: 'let/const мають коректну блокову область видимості, що усуває цілий клас помилок var', ok: true },
      { t: 'var взагалі видалено із сучасного JavaScript', ok: false },
      { t: 'let/const швидші за var', ok: false },
    ],
    ex: 'var має область видимості функції (а не блоку), що історично призводило до заплутаних помилок — let/const виправляють це.',
  },
  {
    q: '2. Чому варто завжди використовувати === замість ==?',
    opts: [
      { t: '== виконує неявне приведення типів за заплутаними правилами, що часто дає несподівані результати', ok: true },
      { t: '== працює лише з числами', ok: false },
      { t: 'Різниці немає, це стилістичний вибір', ok: false },
    ],
    ex: '0 == false дає true, "5" == 5 дає true — подібні пастки неявного приведення типів повністю усуваються строгим порівнянням.',
  },
]

export default function Lecture02() {
  return (
    <article>
      <div className="kicker">Лекція 2</div>
      <h1>Основи JavaScript</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Впевнено володіти базовим синтаксисом JavaScript перед переходом до фреймворків.</li>
        </ul>
      </div>

      <h2>Змінні: let, const</h2>
      <pre className="code"><code>{`let counter = 0;       // можна змінювати
const PI = 3.14159;    // не можна перепризначити`}</code></pre>
      <p><code>const</code> забороняє перепризначення змінної, але не робить об'єкт незмінним — вміст об'єкта все ще можна редагувати.</p>

      <h2>Стрілочні функції</h2>
      <pre className="code"><code>{`const multiply = (a, b) => a * b;`}</code></pre>
      <p>Не створюють власного контексту <code>this</code> — успадковують його з зовнішньої області, зручно в callback-ах і Vue-компонентах.</p>

      <h2>Деструктуризація та spread</h2>
      <pre className="code"><code>{`const { temperature, humidity } = device;
const updated = { ...device, temperature: 25 };`}</code></pre>

      <h2>Строге порівняння</h2>
      <pre className="code"><code>{`0 == false;    // true  — нежорстке, приведення типів
0 === false;   // false — строге, типи різні`}</code></pre>
      <p><b>Правило курсу:</b> завжди <code>===</code>/<code>!==</code>.</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">Наступна лекція — асинхронність та ES6+, критична основа для роботи з IoT-даними.</p>
    </article>
  )
}

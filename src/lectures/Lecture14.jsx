import Quiz from '../components/Quiz.jsx'
import JwtDecoder from '../widgets/JwtDecoder.jsx'

const QUESTIONS = [
  {
    q: '1. JWT-токен зашифрований?',
    opts: [
      { t: 'Ні — Header і Payload лише закодовані Base64, будь-хто може прочитати; секретність гарантує підпис', ok: true },
      { t: 'Так, повністю зашифрований AES', ok: false },
      { t: 'JWT — це пароль користувача', ok: false },
    ],
    ex: 'Підпис перевіряє цілісність і автентичність, а не приховує дані — не кладіть у payload секретну інформацію.',
  },
  {
    q: '2. Чим авторизація відрізняється від автентифікації?',
    opts: [
      { t: 'Автентифікація — хто ви; авторизація — чи дозволено саме вам цю дію над цим ресурсом', ok: true },
      { t: 'Це синоніми', ok: false },
      { t: 'Авторизація стосується лише паролів', ok: false },
    ],
    ex: 'Користувач може бути автентифікований (відомий системі), але не авторизований для конкретної дії (напр. чужий пристрій).',
  },
]

export default function Lecture14() {
  return (
    <article>
      <div className="kicker">Лекція 14</div>
      <h1>Безпека веб-IoT застосунків</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Реалізувати JWT-автентифікацію, CORS, валідацію вхідних даних.</li>
        </ul>
      </div>

      <JwtDecoder />

      <h2>Middleware автентифікації</h2>
      <pre className="code"><code>{`function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Токен відсутній" });
    req.user = jwt.verify(token, SECRET_KEY);
    next();
}`}</code></pre>

      <h2>CORS</h2>
      <pre className="code"><code>{`app.use(cors({ origin: "https://my-dashboard.com", credentials: true }));`}</code></pre>
      <p><code>origin: "*"</code> небезпечний для продакшену — відкриває API для будь-якого сайту.</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекцією 13) — <b>Лаб. 6</b>.</p>
    </article>
  )
}

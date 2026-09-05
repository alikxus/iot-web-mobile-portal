import Quiz from '../components/Quiz.jsx'
import ManifestPreview from '../widgets/ManifestPreview.jsx'

const QUESTIONS = [
  {
    q: '1. Які три умови потрібні для встановлюваності PWA?',
    opts: [
      { t: 'HTTPS, коректний Web App Manifest, зареєстрований Service Worker', ok: true },
      { t: 'Лише наявність файлу manifest.json', ok: false },
      { t: 'Платна підписка Google Play', ok: false },
    ],
    ex: 'Усі три умови мають виконуватись одночасно, інакше браузер не запропонує встановлення.',
  },
]

export default function Lecture11() {
  return (
    <article>
      <div className="kicker">Лекція 11</div>
      <h1>Основи PWA: Web App Manifest</h1>

      <div className="goals">
        <b>Цілі заняття</b>
        <ul>
          <li>Створювати Web App Manifest і розуміти критерії встановлюваності.</li>
        </ul>
      </div>

      <ManifestPreview />

      <h2>Перехоплення встановлення</h2>
      <pre className="code"><code>{`window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event; // для власної кнопки "Встановити"
});`}</code></pre>

      <h2>vite-plugin-pwa</h2>
      <p>Автоматично генерує маніфест і реєструє Service Worker для Vue/Vite-проєктів.</p>

      <Quiz questions={QUESTIONS} />

      <p className="footer-note">🧪 Закріплення (разом з лекцією 12) — <b>Лаб. 5</b>: перетворення на PWA.</p>
    </article>
  )
}

# Веб-програмування IoT та мобільних додатків — інтерактивний портал

Інтерактивний навчальний портал для груп АР-25ск-1, 175-24-1, 174-24-1. Побудований на React + Vite.

## Структура

```
src/
├── App.jsx            # навігація (сайдбар: 15 лекцій + 7 лабораторних)
├── components/Quiz.jsx # компонент самоперевірки
├── lectures/            # Lecture01.jsx ... Lecture15.jsx
├── labs/                # Lab01.jsx ... Lab07.jsx
├── widgets/
│   ├── ArchitectureFlow.jsx    # пристрій→брокер→backend→frontend→PWA (Л1)
│   ├── AsyncTimeline.jsx       # callback/Promise/async порівняння (Л3)
│   ├── HttpRequestBuilder.jsx  # REST запит/відповідь (Л4)
│   ├── MqttTopicMatcher.jsx    # wildcard-підписки MQTT (Л5)
│   ├── LiveDeviceEmulator.jsx  # живий емулятор пристрою (Л6)
│   ├── ManifestPreview.jsx     # конструктор Web App Manifest (Л11)
│   ├── CacheStrategyDemo.jsx   # стратегії кешування SW (Л12)
│   └── JwtDecoder.jsx          # структура JWT-токена (Л14)
└── styles.css
```

## Розробка

```bash
npm install
npm run dev
npm run build
```

## Деплой на GitHub Pages

Автодеплой через `.github/workflows/deploy.yml` (додається окремо через GitHub UI — токен без права `workflow`). Увімкнути Pages: Settings → Pages → Source: GitHub Actions.

## Пов'язаний репозиторій

Повний код (Node.js backend, MQTT-брокер, Vue.js застосунок, PWA) — у приватному репозиторії [`iot-web-mobile-kurs`](https://github.com/alikxus/iot-web-mobile-kurs).

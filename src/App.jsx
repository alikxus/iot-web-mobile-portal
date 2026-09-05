import { useState } from 'react'
import Lecture01 from './lectures/Lecture01.jsx'
import Lecture02 from './lectures/Lecture02.jsx'
import Lecture03 from './lectures/Lecture03.jsx'
import Lecture04 from './lectures/Lecture04.jsx'
import Lecture05 from './lectures/Lecture05.jsx'
import Lecture06 from './lectures/Lecture06.jsx'
import Lecture07 from './lectures/Lecture07.jsx'
import Lecture08 from './lectures/Lecture08.jsx'
import Lecture09 from './lectures/Lecture09.jsx'
import Lecture10 from './lectures/Lecture10.jsx'
import Lecture11 from './lectures/Lecture11.jsx'
import Lecture12 from './lectures/Lecture12.jsx'
import Lecture13 from './lectures/Lecture13.jsx'
import Lecture14 from './lectures/Lecture14.jsx'
import Lecture15 from './lectures/Lecture15.jsx'
import Lab01 from './labs/Lab01.jsx'
import Lab02 from './labs/Lab02.jsx'
import Lab03 from './labs/Lab03.jsx'
import Lab04 from './labs/Lab04.jsx'
import Lab05 from './labs/Lab05.jsx'
import Lab06 from './labs/Lab06.jsx'
import Lab07 from './labs/Lab07.jsx'

const CONTENT = {
  l1: Lecture01, l2: Lecture02, l3: Lecture03, l4: Lecture04, l5: Lecture05,
  l6: Lecture06, l7: Lecture07, l8: Lecture08, l9: Lecture09, l10: Lecture10,
  l11: Lecture11, l12: Lecture12, l13: Lecture13, l14: Lecture14, l15: Lecture15,
  lr1: Lab01, lr2: Lab02, lr3: Lab03, lr4: Lab04, lr5: Lab05, lr6: Lab06, lr7: Lab07,
}

const LECTURES = [
  { id: 'l1', n: 1, title: 'Вступ: архітектура IoT-Web-Mobile' },
  { id: 'l2', n: 2, title: 'Основи JavaScript' },
  { id: 'l3', n: 3, title: 'Асинхронність та ES6+' },
  { id: 'l4', n: 4, title: 'Node.js та Express — REST API' },
  { id: 'l5', n: 5, title: 'WebSocket vs MQTT' },
  { id: 'l6', n: 6, title: 'Емуляція IoT-пристроїв' },
  { id: 'l7', n: 7, title: 'MQTT-брокер та інтеграція' },
  { id: 'l8', n: 8, title: 'Основи Vue.js' },
  { id: 'l9', n: 9, title: 'Pinia та Vue Router' },
  { id: 'l10', n: 10, title: 'Vue.js + backend: REST/WebSocket' },
  { id: 'l11', n: 11, title: 'PWA: Web App Manifest' },
  { id: 'l12', n: 12, title: 'Service Workers' },
  { id: 'l13', n: 13, title: 'Push-повідомлення' },
  { id: 'l14', n: 14, title: 'Безпека' },
  { id: 'l15', n: 15, title: 'Розгортання та підсумок' },
]

const LABS = [
  { id: 'lr1', n: 1, title: 'REST API + Node.js емулятор' },
  { id: 'lr2', n: 2, title: 'WebSocket/MQTT реальний час' },
  { id: 'lr3', n: 3, title: 'Vue.js-дашборд' },
  { id: 'lr4', n: 4, title: 'Керування пристроєм із Vue.js' },
  { id: 'lr5', n: 5, title: 'Перетворення на PWA' },
  { id: 'lr6', n: 6, title: 'Push-сповіщення, безпека' },
  { id: 'lr7', n: 7, title: 'Підсумковий проект' },
]

export default function App() {
  const [active, setActive] = useState('l1')
  const Active = CONTENT[active]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-title">Веб-програмування IoT та мобільних додатків</span>
          <ul className="specs">
            <li><span className="spec-code">174</span> / <span className="spec-code">175</span> / АР-25ск-1</li>
          </ul>
        </div>

        <div className="nav-group">
          <h4>Лекції</h4>
          {LECTURES.map((l) => {
            const ready = !!CONTENT[l.id]
            return (
              <button key={l.id} className={`nav-item ${active === l.id ? 'active' : ''} ${ready ? '' : 'disabled'}`}
                onClick={() => ready && setActive(l.id)}>
                <span className="num">Л{l.n}</span>{l.title}
              </button>
            )
          })}
        </div>

        <div className="nav-group">
          <h4>Лабораторні</h4>
          {LABS.map((l) => {
            const ready = !!CONTENT[l.id]
            return (
              <button key={l.id} className={`nav-item ${active === l.id ? 'active' : ''} ${ready ? '' : 'disabled'}`}
                onClick={() => ready && setActive(l.id)}>
                <span className="num">ЛР{l.n}</span>{l.title}
              </button>
            )
          })}
        </div>
      </aside>

      <main className="content">
        {Active && <Active />}
      </main>
    </div>
  )
}

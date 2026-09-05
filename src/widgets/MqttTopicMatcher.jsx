import { useMemo, useState } from 'react'

const SAMPLE_TOPICS = [
  'devices/sensor1/readings',
  'devices/sensor1/commands',
  'devices/sensor2/readings',
  'devices/sensor2/status',
  'devices/sensor1/status',
  'devices/sensor1/status/battery',
]

// Перевірка відповідності MQTT-теми фільтру підписки з підтримкою + та #
function topicMatches(filter, topic) {
  const filterParts = filter.split('/')
  const topicParts = topic.split('/')

  for (let i = 0; i < filterParts.length; i++) {
    const f = filterParts[i]
    if (f === '#') return true // # закриває решту, завжди підходить далі
    if (i >= topicParts.length) return false
    if (f === '+') continue // + відповідає рівно одному рівню
    if (f !== topicParts[i]) return false
  }
  return filterParts.length === topicParts.length
}

export default function MqttTopicMatcher() {
  const [filter, setFilter] = useState('devices/+/readings')

  const results = useMemo(
    () => SAMPLE_TOPICS.map((t) => ({ topic: t, match: topicMatches(filter, t) })),
    [filter]
  )

  return (
    <div className="widget">
      <h3>Перевірка MQTT-підписки (wildcards + та #)</h3>
      <p className="hint">
        <code>+</code> — рівно один рівень теми; <code>#</code> — довільна кількість рівнів до кінця (лише в самому кінці шаблону).
      </p>

      <div className="field">
        <label>Шаблон підписки (topic filter)</label>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="напр. factory1/+/level" />
      </div>

      <div style={{ marginTop: 12 }}>
        {results.map((r) => (
          <div key={r.topic} className={`topic-row ${r.match ? 'match' : 'nomatch'}`}>
            {r.match ? '✅' : '—'} {r.topic}
          </div>
        ))}
      </div>
    </div>
  )
}

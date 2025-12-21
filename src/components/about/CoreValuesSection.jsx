'use client'

import styles from './about-minimal.module.css'

const VALUES = [
  { icon: 'A', title: 'Excellence', desc: 'We pursue quality in every program, mentorship, and outcome.' },
  { icon: 'L', title: 'Learning', desc: 'We foster curiosity, growth, and continuous improvement.' },
  { icon: 'M', title: 'Measurability', desc: 'We track impact and deliver tangible results.' },
]

export default function CoreValuesSection() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Core Values</h2>
        <div className={styles.valuesGrid}>
          {VALUES.map((v, i) => (
            <div key={v.title} className={styles.valueItem}>
              <div className={styles.valueBadge}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

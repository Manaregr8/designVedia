'use client'

import styles from './about-minimal.module.css'

const SERVICES = [
  { icon: '📐', title: 'Design Training', desc: 'UI/UX, branding, and visual communication fundamentals.' },
  { icon: '🎯', title: 'Strategy & Mentorship', desc: 'Career guidance, portfolio review, and industry insights.' },
  { icon: '🌍', title: 'Global Communication', desc: 'Cross-cultural communication and international project work.' },
  { icon: '💼', title: 'Career Development', desc: 'Job readiness, interview prep, and placement support.' },
]

export default function WhatWeDoSection() {
  return (
    <section className={styles.whatSection}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>What We Do</h2>
        <p className={styles.whatLead}>
          We offer practical, mentor-led programs designed to build real skills and real careers.
        </p>
        <div className={styles.whatGrid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.whatCard}>
              <div className={styles.whatIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

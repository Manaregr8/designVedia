'use client'

import styles from './about-minimal.module.css'

const REASONS = [
  { title: 'Mentor-Led Learning', desc: 'One-on-one guidance from industry professionals with real-world experience.' },
  { title: 'Portfolio-First Curriculum', desc: 'Every project is designed to build your professional portfolio and credibility.' },
  { title: 'Global Opportunities', desc: 'Access to international collaborations, projects, and career pathways.' },
  { title: 'Measurable Outcomes', desc: 'We track placements, career growth, and business impact for every program.' },
  { title: 'Community & Support', desc: 'Join a network of designers, strategists, and communicators across the globe.' },
]

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Why Choose Us</h2>
        <div className={styles.whyList}>
          {REASONS.map((r, i) => (
            <div key={r.title} className={styles.whyItem}>
              <div className={styles.whyNumber}>{i + 1}</div>
              <div className={styles.whyContent}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

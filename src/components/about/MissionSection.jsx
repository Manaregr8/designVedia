'use client'

import styles from './about-minimal.module.css'

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className={styles.missionCard}>
          <h2>Our Mission</h2>
          <p className={styles.missionStatement}>
            To empower learners and brands with design, strategy, and communication skills 
            that create measurable real-world impact.
          </p>
          <div className={styles.missionPoints}>
            <div className={styles.missionPoint}>
              <div className={styles.missionIcon}>✓</div>
              <p>Build practical, industry-aligned programs</p>
            </div>
            <div className={styles.missionPoint}>
              <div className={styles.missionIcon}>✓</div>
              <p>Create mentorship-driven learning environments</p>
            </div>
            <div className={styles.missionPoint}>
              <div className={styles.missionIcon}>✓</div>
              <p>Deliver measurable career and business outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import styles from './about-minimal.module.css'

export default function VisionSection() {
  return (
    <section className={styles.visionSection}>
      <div className={styles.visionBand}>
        <p className={styles.visionStatement}>
          Design education that opens doors to global opportunities.
        </p>
        <p className={styles.visionClarifier}>
          We envision a world where talented learners have access to world-class design mentorship, 
          portfolio support, and career pathways regardless of geography or background.
        </p>
      </div>
    </section>
  )
}

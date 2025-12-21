'use client'

import styles from './about-minimal.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <p className={styles.heroEyebrow}>About Designing Vidya</p>
        <h1 className={styles.heroTitle}>
          Design education for the global stage
        </h1>
        <p className={styles.heroLead}>
          We teach design, strategy, and communication to build confident, 
          portfolio-ready professionals ready for global opportunities.
        </p>
      </div>
    </section>
  )
}

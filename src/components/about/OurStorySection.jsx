'use client'

import styles from './about-minimal.module.css'

export default function OurStorySection() {
  return (
    <section className={styles.storySection}>
      <div className={`${styles.container}`} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>
              Designing Vidya was founded with a simple mission: to create accessible, high-quality 
              design education that prepares learners for real-world impact. We recognized a gap between 
              traditional design training and what the global market demands.
            </p>
            <div className={styles.storyDivider}></div>
            <p>
              Today, we mentor hundreds of learners across design, strategy, and communication—helping 
              them build portfolios, careers, and confidence in a competitive creative industry.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src="/uploads/DV.png" alt="Designing Vidya journey" />
          </div>
        </div>
      </div>
    </section>
  )
}

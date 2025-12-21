'use client'

import styles from './about-minimal.module.css'

export default function CTAFooterSection() {
  return (
    <section className={styles.ctaFooter}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Ready to get started?</h2>
        <p>
          Join our community of learners and professionals building careers in design, strategy, 
          and global communication.
        </p>
        <a href="/contact-us" className={styles.ctaButton}>
          Contact Us
        </a>
      </div>
    </section>
  )
}

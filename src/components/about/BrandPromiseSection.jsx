'use client'

import styles from './about-minimal.module.css'

export default function BrandPromiseSection() {
  return (
    <section className={styles.promiseSection}>
      <div className={styles.promiseBand}>
        <p className={styles.promiseStatement}>
          Education that works.
        </p>
        <p className={styles.promiseSubline}>
          We promise quality, clarity, and measurable outcomes in every program we offer.
        </p>
      </div>
    </section>
  )
}

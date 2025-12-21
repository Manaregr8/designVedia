'use client'

import styles from './about-minimal.module.css'

const TEAM = [
  { name: 'Jatin', role: 'Founder & Creative Director', image: '/uploads/DV.png' },
  { name: 'Priya', role: 'Head of Curriculum', image: '/uploads/DV-1.png' },
  { name: 'Amit', role: 'Product & UX Lead', image: '/uploads/DV-3.png' },
  { name: 'Rina', role: 'Mentor & Coach', image: '/uploads/Only DV.png' },
]

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {TEAM.map((m) => (
            <div key={m.name} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={m.image} alt={m.name} />
              </div>
              <p className={styles.memberName}>{m.name}</p>
              <p className={styles.memberRole}>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

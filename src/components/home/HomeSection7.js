"use client"
import React from 'react';
import styles from './HomeSection7.module.css';
import useScrollAnimation from '@/lib/useScrollAnimation';

const HomeSection7 = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={styles.cta}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Ready to Start Your Creative Career Journey?</h2>
          <p className={styles.description}>
            Get clarity on the right course, career path, and next steps with a personalized one-on-one counselling session. No pressure. Just honest guidance.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              <span>Get Your Free Career Counseling</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.btnRipple}></span>
            </button>
            <button className={styles.secondaryBtn}>
              <span>Help Me Choose</span>
              <span className={styles.btnRipple}></span>
            </button>
          </div>
          <div className={styles.trustLine}>
            100% free &middot; No sales pressure &middot; Career-focused guidance
          </div>
          <div className={styles.reassureLine}>
            <small>Not sure yet? That’s okay. Most students aren’t. Start with clarity.</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection7;

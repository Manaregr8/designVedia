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
          <h2 className={styles.title}>Ready to Transform Your Brand?</h2>
          <p className={styles.description}>
            Let's work together to create something extraordinary. Get in touch with us 
            and let's start your journey towards digital excellence.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              <span>Start Your Project</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.btnRipple}></span>
            </button>
            <button className={styles.secondaryBtn}>
              <span>Schedule a Call</span>
              <span className={styles.btnRipple}></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection7;

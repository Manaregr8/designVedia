"use client";

import React from "react";
import styles from "./HomeSection5.module.css";
import useScrollAnimation from "@/lib/useScrollAnimation";

const HIGHLIGHTS = [
  {
    title: "Innovation at the core",
    text: "We blend strategy, design and technology to solve modern business problems.",
  },
  {
    title: "Learner‑first mindset",
    text: "Every experience is crafted around clarity, confidence and real‑world impact.",
  },
  {
    title: " measurable outcomes",
    text: "From first brief to final hand‑off, we track what actually moves the needle.",
  },
];

const HomeSection5 = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text side */}
          <div
            className={`${styles.textCol} ${isVisible ? styles.visible : ""}`}
          >
            <span className={styles.kicker}>About Designing Vidya</span>

            <h2 className={styles.title}>
              Where strategy
              <br />
              meets creative learning.
            </h2>

            <p className={styles.lead}>
              Designing Vidya helps learners and brands speak the language of
              design, communication and global opportunities with confidence.
            </p>

            <p className={styles.body}>
              From foundational skills to advanced storytelling, our programs
              are built to be practical, industry‑aligned and deeply human. A
              focused mix of mentors, projects and feedback helps you grow
              faster, with clarity and direction.
            </p>

            <div className={styles.highlights}>
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <div className={styles.highlightTextBlock}>
                    <h3 className={styles.highlightTitle}>{item.title}</h3>
                    <p className={styles.highlightText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.cta}>
              Learn more about us
            </button>
          </div>

          {/* Visual side */}
          <div
            className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}
          >
            <div className={styles.card}>
              <div className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.logoWrap}>
                <img
                  src="/uploads/Only DV.png"
                  alt="Designing Vidya logo"
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardTag}>Design • Strategy • Language</p>
                <p className={styles.cardLine}>
                  Building portfolios and careers that stand out in a global
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;

"use client";

import React from "react";
import styles from "./HomeSection5.module.css";
import useScrollAnimation from "@/lib/useScrollAnimation";

const HIGHLIGHTS = [
  {
    title: "Industry-relevant learning",
    text: "Our curriculum is aligned with real creative workflows used across media, design, and production.",
  },
  {
    title: "Learner-first mentorship",
    text: "Small batches, personal guidance, and continuous feedback to help you grow faster and smarter.",
  },
  {
    title: "Outcome-driven approach",
    text: "We focus on skills, portfolios, and career readiness — not just course completion.",
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

            <span className={styles.kicker}>ABOUT DESIGNING VIDYA</span>

            <h2 className={styles.title}>
              Where Learning Meets Real Creative Careers
            </h2>

            <p className={styles.lead}>
              Designing Vidya is a career-focused creative institute built for learners who want clarity, confidence, and real-world skills. We help aspiring creators turn their interest in design, media, and technology into professional opportunities.
            </p>

            <p className={styles.body}>
              From foundational skills to advanced execution, our programs are designed around practical learning, mentorship, and industry expectations. Every course focuses on building portfolios, confidence, and direction — so you’re prepared for what comes next.
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
              Learn More About Our Approach &rarr;
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

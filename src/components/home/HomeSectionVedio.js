"use client";

import React, { useEffect, useRef } from "react";
import styles from "./homeSectionVedio.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeSectionVedio = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      // fade in overlay content and move it up slightly
      tl.fromTo(
        overlayRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        // then scale video a bit and darken overlay as we scroll
        .to(
          `.${styles.video}`,
          { scale: 1.1, duration: 1 },
          "<" // sync with previous
        )
        .to(
          `.${styles.overlayBg}`,
          { backgroundColor: "rgba(0,0,0,0.55)", duration: 1 },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background video */}
      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src="https://www.pexels.com/download/video/34464845/"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Dark overlay for readability */}
      <div className={styles.overlayBg} />

      {/* Content that overlaps video on scroll */}
      <div ref={overlayRef} className={styles.content}>
        <p className={styles.kicker}>Our Story</p>
        <h2 className={styles.title}>
          A bold vision,
          <br />
          captured in motion.
        </h2>
        <p className={styles.text}>
          Watch how ideas turn into immersive experiences as you scroll through
          our world of design, strategy, and technology.
        </p>
      </div>
    </section>
  );
};

export default HomeSectionVedio;

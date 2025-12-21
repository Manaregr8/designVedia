"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeSection1.module.css";

const HomeSection1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Top dot */}
        <div className={styles.heroDot} />

        {/* Text block */}
        <div
          className={`${styles.heroContent} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>
              Your Creative, Media &amp; Technology
            </span>
            <span className={styles.titleLine}>
              Transformation Partner
            </span>
          </h1>

          <p className={styles.heroDescription}>
            We&apos;re a team of 1200+ specialists delivering award‑winning work
            for 350+ brands worldwide, 10 years and counting!
          </p>
        </div>
      </div>

      {/* Banner Marquee */}
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerTrack}>
          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>IT&apos;S TIME TO CREATE A SCHBANG</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>IT&apos;S TIME TO CREATE A SCHBANG</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>IT&apos;S TIME TO CREATE A SCHBANG</span>
          </div>

          {/* duplicate for seamless loop */}
          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>IT&apos;S TIME TO CREATE A SCHBANG</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>IT&apos;S TIME TO CREATE A SCHBANG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;

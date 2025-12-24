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
              Build a Career in Creativity
            </span>
            <span className={styles.titleLine}>
              Beyond Skills
            </span>
          </h1>

          <p className={styles.heroDescription}>
           Trusted by 25,000+ aspiring creators. We don’t just teach software. We mentor you 
through real projects, portfolios, and career paths that actually get you hired.
          </p>
          <div className={styles.heroCTAWrapper}>
            <button className={styles.ctaPrimary}>Explore Courses</button>
            <button className={styles.ctaSecondary}>Get Free Guidance</button>
          </div>
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
            <span>ANIMATION</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>VFX</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>Motion Graphics</span>
          </div>

          {/* duplicate for seamless loop */}
          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>GRAPHICS DESIGNING</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>VIDEO EDITING</span>
          </div>
          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>ANIMATION</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>VFX</span>
          </div>

          <div className={styles.bannerItem}>
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif"
              alt=""
              className={styles.rotatingIcon}
            />
            <span>Motion Graphics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;

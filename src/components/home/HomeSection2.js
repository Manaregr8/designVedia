// HomeSection2.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HomeSection2.module.css";

const COURSES = [
  {
    id: 1,
    title: "Brand Strategy & Identity",
    description:
      "Learn how to build strong, distinctive brands with hands‑on strategy frameworks.",
    image:
      "https://horr.nkdev.info/landing/wp-content/uploads/sites/5/2022/12/IP38-EggHunt-1-scaled.jpg",
  },
  {
    id: 2,
    title: "Creative Tech & Web",
    description:
      "Master modern front‑end tools and creative dev workflows for digital experiences.",
    image:
      "https://horr.nkdev.info/landing/wp-content/uploads/sites/5/2022/12/IP31-TheTower-scaled.jpg",
  },
  {
    id: 3,
    title: "Media & Performance",
    description:
      "Plan, launch, and optimize campaigns that actually move the numbers.",
    image:
      "https://horr.nkdev.info/landing/wp-content/uploads/sites/5/2023/01/IP39-DeepMarket-scaled.jpg",
  },
  {
    id: 4,
    title: "Content, Film & Photography",
    description:
      "Design cinematic narratives, shoots, and edits for brands and creators.",
    image:
      "https://horr.nkdev.info/landing/wp-content/uploads/sites/5/2023/01/IP39-Overrun-scaled.jpg",
  },
  {
    id: 5,
    title: "Design & Visual Arts",
    description:
      "Create stunning visual experiences with industry-standard design principles and tools.",
    image:
      "https://horr.nkdev.info/landing/wp-content/uploads/sites/5/2022/12/IP38-EggHunt-1-scaled.jpg",
  },
];

const HomeSection2 = () => {
  const [activeId, setActiveId] = useState(1);
  const labelRef = useRef(null);
  const defaultLabel = "Our Courses";

  const splitText = (text) => {
    const labelEl = labelRef.current;
    if (!labelEl) return;

    labelEl.innerHTML = "";
    let delay = 0;

    text.split("").forEach((char) => {
      delay += 40;
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.style.transitionDelay = `${delay}ms`;
      labelEl.appendChild(span);

      setTimeout(() => {
        span.classList.add(styles.show);
      }, 10);
    });
  };

  useEffect(() => {
    splitText(defaultLabel);
  }, []);

  const handleCardClick = (courseId, courseTitle) => {
    setActiveId(courseId);
    splitText(courseTitle);
  };

  return (
    <section className={styles.section}>
      {/* Center label */}
      <h2 ref={labelRef} className={styles.label}>
        {defaultLabel}
      </h2>

      {/* Click-based slider */}
      <div className={styles.slider}>
        {COURSES.map((course) => (
          <div
            key={course.id}
            className={`${styles.link} ${activeId === course.id ? styles.active : ''}`}
            onClick={() => handleCardClick(course.id, course.title)}
          >
            <img src={course.image} alt={course.title} />
            <div className={styles.linkContent}>
              <p className={styles.overline}>Our Courses</p>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseDescription}>
                {course.description}
              </p>
              <button className={styles.ctaBtn}>Book Your Slot</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection2;
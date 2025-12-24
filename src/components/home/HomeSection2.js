// HomeSection2.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HomeSection2.module.css";

const COURSES = [
  {
    id: 1,
    title: "Animation",
    headline: "Bring Stories to Life Through Animation",
    description: "Learn the art of movement, storytelling, and character animation using industry standard tools.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "VFX",
    headline: "Create What the Camera Can’t Capture",
    description: "Master visual effects from green screen to cinematic compositing, learn how professionals turn imagination into believable reality.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Motion Graphics",
    headline: "Design That Moves. Messages That Stick.",
    description: "Combine design, animation, and storytelling to create powerful motion visuals for digital media.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Graphic Designing",
    headline: "Design Visuals That Speak for Brands",
    description: "Learn the fundamentals of design, branding, and visual communication. Create brand systems that actually get noticed.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Video Editing",
    headline: "Turn Raw Footage into Impactful Stories",
    description: "Edit videos that hold attention and drive emotion. Learn pacing, storytelling, transitions, and professional workflows used by editors across YouTube, ads, and films.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
];

const HomeSection2 = () => {
  const [activeId, setActiveId] = useState(1);
  const labelRef = useRef(null);
  const defaultLabel = "Our Courses";
  const sectionHeadline = "Explore Our Creative Courses";
  const sectionSubtext = "From animation to video editing, master the skills that power the creative industry.";

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
      {/* Section Headline and Subtext */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeadline}>{sectionHeadline}</h2>
        <p className={styles.sectionSubtext}>{sectionSubtext}</p>
      </div>
      {/* Center label with animation */}
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
              <p className={styles.overline}>{course.title}</p>
              <h3 className={styles.courseTitle}>{course.headline}</h3>
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
"use client";

import React from "react";
import styles from "./HomeSection8.module.css";

const testimonials = [
  {
    author: {
      name: "Aarav Sharma",
      handle: "Graphic Designer at Creative Studio, Mumbai",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    text: "After completing the Graphic Design course, I landed my dream job at a top Mumbai studio. The hands-on projects made all the difference!",
  },
  {
    author: {
      name: "Priya Singh",
      handle: "Freelance UI/UX Designer, Bengaluru",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    text: "The UI/UX program gave me the skills and confidence to start freelancing. Now I work with clients across India!",
  },
  {
    author: {
      name: "Rohan Patel",
      handle: "Senior Motion Graphics Artist, Ahmedabad",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    text: "Learning motion graphics here helped me get promoted and lead bigger projects at my agency.",
  },
  {
    author: {
      name: "Sneha Iyer",
      handle: "Web Developer at Tech Startup, Pune",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    text: "The web development course was practical and up-to-date. I got placed at a Pune startup right after graduating!",
  },
  {
    author: {
      name: "Vikram Desai",
      handle: "Freelance Digital Marketer, Delhi",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    text: "I now run my own digital marketing business and consult for brands across Delhi. The mentorship was invaluable.",
  },
  {
    author: {
      name: "Ananya Joshi",
      handle: "Founder, Joshi Photography Studio, Surat",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    text: "The photography course gave me the confidence to start my own studio. My skills and business have grown so much!",
  },
];

const TestimonialCard = ({ author, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          <img src={author.avatar} alt={author.name} />
        </div>
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>{author.name}</h3>
          <p className={styles.authorHandle}>{author.handle}</p>
        </div>
      </div>
      <p className={styles.testimonialText}>{text}</p>
    </div>
  );
};

const HomeSection8 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Real Career Progress.</h2>
          <p className={styles.description}>
            Hear directly from learners who transformed their creative skills into real opportunities 
with Designing Vidya
          </p>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.scrollerContainer}>
            <div className={styles.scrollerWrapper}>
              {/* First set */}
              <div className={styles.marqueeContent}>
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`set1-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                  />
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className={styles.marqueeContent}>
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`set2-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                  />
                ))}
              </div>
            </div>

            {/* Gradient overlays (design same) */}
            <div className={styles.gradientLeft}></div>
            <div className={styles.gradientRight}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;

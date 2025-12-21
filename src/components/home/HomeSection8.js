"use client";

import React from "react";
import styles from "./HomeSection8.module.css";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mikedev",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "The customer support is outstanding. Every question is answered promptly and thoroughly.",
  },
  {
    author: {
      name: "Lisa Anderson",
      handle: "@lisadesigns",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "As a designer, I appreciate the intuitive interface and beautiful UI. It makes complex tasks feel simple.",
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jamescode",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Best investment we've made this year. ROI was visible within the first month of implementation.",
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
          <h2 className={styles.title}>Trusted by developers worldwide</h2>
          <p className={styles.description}>
            Join thousands of developers who are already building the future with our AI platform
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

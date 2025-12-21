"use client"
import React from 'react';
import styles from './HomeSection6.module.css';
import useScrollAnimation from '@/lib/useScrollAnimation';

const HomeSection6 = () => {
  const testimonials = [
    {
      quote: "Schbang transformed our digital presence completely. Their creative approach and strategic thinking helped us achieve remarkable growth.",
      author: "Sarah Johnson",
      role: "CEO, Tech Innovations",
      avatar: "👩"
    },
    {
      quote: "Working with Schbang has been a game-changer. Their team is professional, creative, and results-driven. Highly recommended!",
      author: "Michael Chen",
      role: "Marketing Director, Global Corp",
      avatar: "👨"
    },
    {
      quote: "The quality of work and attention to detail is outstanding. Schbang truly understands our brand and delivers exceptional results.",
      author: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      avatar: "👩‍💼"
    }
  ];

  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className={styles.testimonials}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => {
            const [cardRef, cardVisible] = useScrollAnimation({ 
              threshold: 0.2,
              rootMargin: '0px 0px -50px 0px'
            });
            
            return (
              <div 
                key={index} 
                ref={cardRef}
                className={`${styles.testimonialCard} ${cardVisible ? styles.visible : ''} ${styles[`stagger-${index + 1}`]}`}
              >
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{testimonial.avatar}</div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;

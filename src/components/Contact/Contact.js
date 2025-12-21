"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

        <div className={styles.contactItem}>
          <div className={styles.icon}><img src='/uploads/mail-reception-svgrepo-com.svg' className={styles.iconimg}></img> </div>
          <div className={styles.contactDetails}>
            <h3>Email</h3>
            <p>contact@company.com</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.icon}><img src='/uploads/telephone-phone-svgrepo-com.svg' className={styles.iconimg}></img>     </div>
          <div className={styles.contactDetails}>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.icon}><img src='/uploads/icons8-location-48.png' className={styles.iconimg}></img>  </div>
          <div className={styles.contactDetails}>
            <h3>Address</h3>
            <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <div className={styles.socialIcon}><img src='/uploads/icons8-facebook-48.png' className={styles.iconimg}></img></div>
          <div className={styles.socialIcon}><img src='/uploads/icons8-instagram-100.png' className={styles.iconimg}></img></div>
          <div className={styles.socialIcon}><img src='/uploads/icons8-youtube-48.png' className={styles.iconimg}></img></div>
          <div className={styles.socialIcon}><img src='/uploads/icons8-whatsapp-48.png' className={styles.iconimg}></img></div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
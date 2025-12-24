"use client"
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={styles.announcementBar}>
        <span className={styles.emoji}>🎉</span>
        <span>Designing Vedia Presents Exclusive Offers for a Limited Time. </span>
        <a href="#" className={styles.readMore}>Read More Here</a>
      </div>
      
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
        <div className={styles.logo}>
           <a href="/"> <img 
              src="/uploads/DV-3.png" 
              alt="design vedia Logo" 
              className={styles.logoImg}
            />    </a>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <a href="#work" className={styles.navLink}>Work</a>
            
            <div className={styles.navDropdown}>
              <button 
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <svg className={`${styles.chevron} ${openDropdown === 'solutions' ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'solutions' && (
                <div className={styles.dropdownMenu}>
                  <a href="#" className={styles.dropdownItem}>Digital Marketing</a>
                  <a href="#" className={styles.dropdownItem}>Creative Services</a>
                  <a href="#" className={styles.dropdownItem}>Technology</a>
                  <a href="#" className={styles.dropdownItem}>Content</a>
                </div>
              )}
            </div>

            <a href="/about" className={styles.navLink}>About</a>

            <div className={styles.navDropdown}>
              <button 
                className={`${styles.navLink} ${styles.dropdownToggle}`}
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <svg className={`${styles.chevron} ${openDropdown === 'resources' ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'resources' && (
                <div className={styles.dropdownMenu}>
                  <a href="#" className={styles.dropdownItem}>Blog</a>
                  <a href="#" className={styles.dropdownItem}>Case Studies</a>
                  <a href="#" className={styles.dropdownItem}>Whitepapers</a>
                  <a href="#" className={styles.dropdownItem}>Webinars</a>
                </div>
              )}
            </div>

            <a href="#careers" className={styles.navLink}>Careers</a>
          </nav>

          <button className={styles.contactBtn}>
            Contact Us
            <span className={styles.arrow}>→</span>
          </button>

          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
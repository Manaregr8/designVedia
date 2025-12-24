// HomeSection4.js
import styles from './HomeSection4.module.css';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
];

const HomeSection4 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerBlock}>
        <h2 className={styles.sectionHeadline}>
          Built for the Industry You Want to Work In
        </h2>
        <p className={styles.sectionSubtext}>
          Our training is aligned with the creative workflows, tools, and expectations followed <br />
          by leading global companies across media, entertainment, and technology.
        </p>
        <div className={styles.logoContextLine}>
          Inspired by industry standards used across top global brands
        </div>
      </div>

      {/* Row 1 : right -> left */}
      <div className={styles.logos}>
        <div className={styles.logo_items}>
          {logos.map((src, i) => (
            <img key={`r1-a-${i}`} src={src} alt="Client logo" />
          ))}
        </div>
        <div className={styles.logo_items}>
          {logos.map((src, i) => (
            <img key={`r1-b-${i}`} src={src} alt="Client logo" />
          ))}
        </div>
      </div>

      {/* Row 2 : left -> right */}
      <div className={`${styles.logos} ${styles.logosReverse}`}>
        <div className={`${styles.logo_items} ${styles.logo_items_reverse}`}>
          {logos.map((src, i) => (
            <img key={`r2-a-${i}`} src={src} alt="Client logo" />
          ))}
        </div>
        <div className={`${styles.logo_items} ${styles.logo_items_reverse}`}>
          {logos.map((src, i) => (
            <img key={`r2-b-${i}`} src={src} alt="Client logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
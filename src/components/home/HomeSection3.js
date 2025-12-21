import styles from "./HomeSection3.module.css";

export default function HomeSection3({ theme = "light" }) {
  const processes = [
    {
      step: "01",
      title: "Student Profiling & Goals",
      description:
        "We start with a counselling session to understand your target exam, current level, and score target.",
    },
    {
      step: "02",
      title: "Structured Study Plan",
      description:
        "Your week is planned for listening, reading, writing, and speaking with clear milestones and homework.",
    },
    {
      step: "03",
      title: "Infrastructure that helps you learn",
      description:
        "Digital smart boards, language labs, calm classrooms and small batch sizes for personal mentoring.",
    },
    {
      step: "04",
      title: "Mock Tests & Feedback",
      description:
        "Regular exam‑style mock tests with written and verbal feedback so you know exactly how to improve.",
    },
  ];

  const galleryImages = [
    { id: 1, bg: "#d4e4e8", size: "top" },
    { id: 2, bg: "#e8d4e0", size: "top" },
    { id: 3, bg: "#f5e6d3", size: "top" },
    { id: 4, bg: "#e0ddd4", size: "middleLeft" },
    { id: 5, bg: "#f5d4dd", size: "middleRight" },
    { id: 6, bg: "#f5e6f0", size: "bottom" },
  ];

  return (
    <section className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.container}>
        {/* Left: process of work / infra / teaching */}
        <div className={styles.content}>
          <div className={styles.badge}>Our Process</div>
          <h2 className={styles.title}>
            How we design your
            <span className={styles.highlight}> learning & exam success</span>
          </h2>
          <p className={styles.subtitle}>
            A clear system that combines smart infrastructure, experienced teachers and exam‑style
            practice to help you speak, write and score better.
          </p>

          <div className={styles.processList}>
            {processes.map((process) => (
              <div key={process.step} className={styles.processItem}>
                <div className={styles.processStep}>{process.step}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{process.title}</h3>
                  <p className={styles.processDesc}>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: gallery covering full left height */}
        <div className={styles.gallery}>
          <div className={styles.gridGallery}>
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className={`${styles.gridItem} ${styles[img.size]}`}
                style={{ backgroundColor: img.bg }}
              >
                <div className={styles.imageOverlay}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from "./HomeSection3.module.css";

export default function HomeSection3({ theme = "light" }) {
  const processes = [
    {
      step: "01",
      title: "Career Profiling & Skill Assessment",
      description:
        "We begin by understanding your background, interests, and career goals to map the right creative path for you.",
    },
    {
      step: "02",
      title: "Structured Skill Training",
      description:
        "Learn core concepts and tools step by step through guided classes, assignments, and practical exercises.",
    },
    {
      step: "03",
      title: "Real-World Projects & Mentorship",
      description:
        "Work on industry-style projects with continuous mentor feedback to build confidence and execution skills.",
    },
    {
      step: "04",
      title: "Portfolio, Interview & Placement Support",
      description:
        "Create a strong portfolio, prepare for interviews, and get guidance toward jobs, chance to freelance with international clients, or internships.",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/uploads/center/IMG_4081.webp",
      alt: "Creative professionals working on projects",
      label: "Creative Workspace",
    },
    {
      id: 2,
      src: "/uploads/center/IMG_4072.webp",
      alt: "Hands-on design training session",
      label: "Training Studio",
    },
    {
      id: 3,
      src: "/uploads/center/IMG_4078.webp",
      alt: "Mentorship and skill development",
      label: "Mentorship Area",
    },
    {
      id: 4,
      src: "/uploads/center/IMG_4066.webp",
      alt: "Portfolio review and feedback",
      label: "Discussion Room",
    },
    {
      id: 5,
      src: "/uploads/center/IMG_4068.webp",
      alt: "Industry-standard creative workspace",
      label: "Cafeteria",
    },
    {
      id: 6,
      src: "/uploads/center/IMG_4076.webp",
      alt: "Collaborative learning environment",
      label: "Collaborative Space",
    },
  ];

  return (
    <section className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Our Process</div>
          <h2 className={styles.title}>
            How We Take You from Beginner to Job-Ready Creative Professional
          </h2>
          <p className={styles.subtitle}>
            A structured, hands-on learning system built around mentorship, real projects, and industry workflows — designed to prepare you for real creative careers, not just certificates.
          </p>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Process Steps */}
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

          {/* Gallery */}
          <div className={styles.gallery}>
            <div className={styles.gridGallery}>
              {galleryImages.map((img) => (
                <div key={img.id} className={styles.gridItem}>
                  <img src={img.src} alt={img.alt} className={styles.galleryImg} />
                  <div className={styles.imageOverlay}></div>
                </div>
              ))}
            </div>
            <p className={styles.trustLine}>Structured. Practical. Focused on real careers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
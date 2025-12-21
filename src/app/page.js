"use client";

import { useEffect, useState } from "react";
import HomeSection1 from "@/components/home/HomeSection1";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection4 from "@/components/home/HomeSection4";
import HomeSection5 from "@/components/home/HomeSection5";
import HomeSection6 from "@/components/home/HomeSection6";
import HomeSection7 from "@/components/home/HomeSection7";
import HomeSection8 from "@/components/home/HomeSection8";
import HomeSectionVedio from "@/components/home/HomeSectionVedio";
import styles from "./homeIntro.module.css";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  // disable scroll while intro plays
  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <>
      {/* Fullscreen video loader */}
      {!introDone && (
        <div className={styles.introWrapper}>
          <video
            className={styles.introVideo}
            src="/uploads/Designing Vidya- Web F.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setIntroDone(true)}
          />
        </div>
      )}

      {/* Main site after video finishes */}
      {introDone && (
        <main>
          <HomeSection1 />
          <HomeSectionVedio />
          <HomeSection2 />
          <HomeSection8 />
          <HomeSection3 />
          <HomeSection4 />
          <HomeSection5 />
          <HomeSection6 />
          <HomeSection7 />
        </main>
      )}
    </>
  );
}

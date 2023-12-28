"use client"

import Image from "next/image";
import picture from "@/public/david-picture.png"
import styles from "./presentation.module.css";
import { useEffect, useRef } from "react";

function Presentation() {
  const presentationElementRef = useRef<HTMLSelectElement>(null!)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      presentationElementRef.current.classList.add(styles.show)
      observer.unobserve(presentationElementRef.current)
    }, { threshold: 0.3 })

    observer.observe(presentationElementRef.current)
  }, [])

  return (
    <section className={styles.presentation} ref={presentationElementRef}>
      <h1 className={styles.name}>
        <span>David</span>
        <span>Michel</span>
      </h1>
      <h2 className={styles.job}>
        <span>Développeur</span>
        <span>Front End</span>
      </h2>
      <Image
        src={picture}
        alt="photo de david michel"
        className={styles.picture}
        priority
      />
    </section>
  );
}

export default Presentation;
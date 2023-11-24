"use client"

import { useEffect, useRef } from "react";
import styles from "./sectionTitle.module.css";

interface Props {
  title: string
}

function SectionTitle({ title }: Props) {
  const titleElementRef = useRef<HTMLHeadingElement>(null!)

  const titleFirstLetter = title[0]
  const restOfTitle = title.slice(1)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      titleElementRef.current.classList.add(styles.show)
      observer.unobserve(titleElementRef.current)
    })

    observer.observe(titleElementRef.current)
  }, [])

  return (
    <h3 className={styles.sectionTitle} ref={titleElementRef}>
      <span>{titleFirstLetter}</span>
      <span>{restOfTitle}</span>
    </h3>
  );
}

export default SectionTitle;
"use client"

import { useEffect, useRef } from "react";
import { PropsWithChildren } from "react"
import styles from "./category.module.css";

interface Props extends PropsWithChildren {
  title: string
}

function Category({ title, children }: Props) {
  const sectionElementRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      sectionElementRef.current.classList.add(styles.show)
      observer.unobserve(sectionElementRef.current)
    }, { threshold: 0.3 })

    observer.observe(sectionElementRef.current)
  }, [])

  return (
    <section className={styles.category} ref={sectionElementRef}>
      <h4>{title}</h4>
      <ul className={styles.skillsList}>
        {children}
      </ul>
    </section>
  );
}

export default Category;
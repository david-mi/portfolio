"use client"

import { useEffect, useRef } from "react";
import { SocialData } from "../data";
import styles from "./socialLink.module.css";
import Link from "next/link";

function SocialLink({ name, href, label, icon }: SocialData) {
  const linkElementRef = useRef<HTMLAnchorElement>(null!)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      linkElementRef.current.classList.add(styles.show)
      observer.unobserve(linkElementRef.current)
    }, { threshold: 0.3 })

    observer.observe(linkElementRef.current)
  }, [])

  return (
    <Link
      ref={linkElementRef}
      className={styles.socialLink}
      href={href}
      target="_blank"
      aria-label={label}
      title={label}
    >
      {icon}
      <p className={styles.name}>{name}</p>
    </Link>
  );
}

export default SocialLink;
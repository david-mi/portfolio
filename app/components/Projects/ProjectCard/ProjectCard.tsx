"use client"

import { useEffect, useRef } from "react";
import type { Project } from "../type";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectCard.module.css";
import { GithubIcon, LiveIcon } from "@/icons";

function ProjectCard(props: Project) {
  const { name, description, previewSrc, tags, urls } = props
  const projectCardRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      projectCardRef.current.classList.add(styles.show)
      observer.unobserve(projectCardRef.current)
    }, { threshold: 0.3 })

    observer.observe(projectCardRef.current)
  }, [])

  return (
    <article className={styles.projectCard} ref={projectCardRef}>
      <header className={styles.header}>
        <h4 className={styles.title}>{name}</h4>
        <nav className={styles.nav}>
          <Link
            className={styles.link}
            href={urls.github}
            target="_blank"
            aria-label={`Visiter le dépôt Github de ${name}`}
            title={`Visiter le dépôt Github de ${name}`}
          >
            <GithubIcon className={styles.svg} />
          </Link>
          <Link
            className={styles.link}
            href={urls.live}
            target="_blank"
            aria-label={`Visiter l'application ${name}`}
            title={`Visiter l'application ${name}`}
          >
            <LiveIcon className={styles.svg} />
          </Link>
        </nav>
      </header>
      <div className={styles.tags}>
        {tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.previewContainer}>
        <Image
          placeholder={"blur"}
          src={previewSrc}
          alt={`Image de prévisualisation de ${name}`}
          className={styles.preview}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
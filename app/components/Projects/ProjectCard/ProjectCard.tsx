import type { Project } from "../type";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectCard.module.css";
import { GithubIcon, LiveIcon } from "@/icons";

function ProjectCard(props: Project) {
  const { name, description, previewSrc, tags, urls } = props

  return (
    <article className={styles.projectCard}>
      <header className={styles.header}>
        <h4 className={styles.title}>{name}</h4>
        <nav className={styles.nav}>
          <Link
            className={styles.link}
            href={urls.github}
            target="_blank"
            aria-label="Visiter le dépôt Github du projet"
            title="Visiter le dépôt Github du projet"
          >
            <GithubIcon className={styles.svg} />
          </Link>
          <Link
            className={styles.link}
            href={urls.live}
            target="_blank"
            aria-label="Visiter l'application"
            title="Visiter l'application"
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
          alt="image de prévisualisation"
          className={styles.preview}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
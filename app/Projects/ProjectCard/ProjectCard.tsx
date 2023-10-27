import type { Project } from "../type";
import Image from "next/image";
import Link from "next/link";
import styles from "./projectCard.module.css";

function ProjectCard(props: Project) {
  const { name, description, previewSrc, tags, urls } = props

  return (
    <article className={styles.projectCard}>
      <nav className={styles.nav}>
        <Link className={styles.link} href={urls.github}>Github</Link>
        <Link className={styles.link} href={urls.live}>Live</Link>
      </nav>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.tags}>
        {tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.previewContainer}>
        <Image
          src={previewSrc}
          alt="image de prévisualisation"
          className={styles.preview}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
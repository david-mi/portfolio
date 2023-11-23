import Link from "next/link";
import styles from "./social.module.css";
import { YoutubeIcon, LinkedInIcon, GithubIcon, EmailIcon } from "@/icons"
import SectionTitle from "../SectionTitle/SectionTitle";

function Social() {
  return (
    <footer className={styles.social}>
      <SectionTitle title="Social" />

      <div className={styles.links}>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/david-michel-073b31222/"
          target="_blank"
          aria-label="Visiter mon profil linkedin"
          title="Visiter mon profil linkedin"
        >
          <LinkedInIcon className={styles.svg} />
          <p>Linkedin</p>
        </Link>
        <Link
          className={styles.link}
          href="https://github.com/david-mi"
          target="_blank"
          aria-label="Visiter mon dépôt Github"
          title="Visiter mon dépôt Github"
        >
          <GithubIcon className={styles.svg} />
          <p>Github</p>
        </Link>
        <Link
          href="mailto:david.michel2809@gmail.com"
          className={styles.link}
          aria-label="M'envoyer un email"
          title="Me contacter par email"
        >
          <EmailIcon className={styles.svg} />
          <p>Email</p>
        </Link>
        <Link
          href="https://www.youtube.com/@david-mi"
          className={styles.link}
          aria-label="Visiter ma chaîne Youtube"
          title="Visiter ma chaîne Youtube"
        >
          <YoutubeIcon className={styles.svg} />
          <p>Youtube</p>
        </Link>
      </div>
    </footer>
  );
}

export default Social;
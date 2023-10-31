import Link from "next/link";
import styles from "./social.module.css";
import { YoutubeIcon, LinkedInIcon, GithubIcon, EmailIcon } from "@/icons"

function Social() {
  return (
    <footer className={styles.social}>
      <h3>Social</h3>

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
        title="M'envoyer un email"
      >
        <EmailIcon className={styles.svg} />
        <p>david.michel2809@gmail.com</p>
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
    </footer>
  );
}

export default Social;
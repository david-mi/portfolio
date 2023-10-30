import Link from "next/link";
import styles from "./social.module.css";
import { YoutubeIcon, LinkedInIcon, GithubIcon, EmailIcon } from "@/icons"

function Social() {
  return (
    <footer className={styles.social}>
      <h2>Social</h2>

      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/david-michel-073b31222/"
        target="_blank"
      >
        <LinkedInIcon className={styles.svg} />
        <p>Linkedin</p>
      </Link>
      <Link
        className={styles.link}
        href="https://github.com/david-mi"
        target="_blank"
      >
        <GithubIcon className={styles.svg} />
        <p>Github</p>
      </Link>
      <Link
        href="mailto:david.michel2809@gmail.com"
        className={styles.link}
      >
        <EmailIcon className={styles.svg} />
        <p>david.michel2809@gmail.com</p>
      </Link>
      <Link
        href="https://www.youtube.com/@david-mi"
        className={styles.link}
      >
        <YoutubeIcon className={styles.svg} />
        <p>Youtube</p>
      </Link>
    </footer>
  );
}

export default Social;
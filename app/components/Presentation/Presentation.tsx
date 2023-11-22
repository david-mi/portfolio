import Image from "next/image";
import picture from "@/public/david-picture.png"
import Link from "next/link";
import styles from "./presentation.module.css";
import ExternalLink from "../icons/ExternalLink";

function Presentation() {
  return (
    <header className={styles.presentation}>
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
      <article className={styles.description}>
        <span>Diplômé de 2 formations :</span>
        <ul>
          <li>
            <span>Développeur Web</span>
            <Link
              href="https://openclassrooms.com/fr/paths/717-developpeur-web"
              target="_blank"
              aria-label="Visiter la page de formation Développeur Web"
              title="Visiter la page de formation Développeur Web"
            >
              <ExternalLink className={styles.svg} />
            </Link>
          </li>
          <li>
            <span>Développeur d'application</span>
            <span>
              JavaScript React
              <Link
                href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react"
                target="_blank"
                aria-label="Visiter la page de formation Développeur d'application JavaScript React"
                title="Visiter la page de formation Développeur d'application JavaScript React"
              >
                <ExternalLink className={styles.svg} />
              </Link>
            </span>
          </li>
        </ul>
        Je souhaite maintenant trouver une entreprise pour collaborer.
      </article>
    </header>
  );
}

export default Presentation;
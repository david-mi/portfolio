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
      />
      <p className={styles.description}>
        Fraîchement diplômé d'une formation de
        Développeur Web
        <Link href="https://openclassrooms.com/fr/paths/717-developpeur-web" target="_blank">
          <ExternalLink className={styles.svg} />
        </Link>
        puis une seconde de
        Développeur d'application JavaScript React
        <Link href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react" target="_blank">
          <ExternalLink className={styles.svg} />
        </Link>
        Je souhaite maintenant trouver une entreprise pour collaborer.
      </p>
    </header>
  );
}

export default Presentation;
import Image from "next/image";
import picture from "@/public/david-picture.png"
import styles from "./presentation.module.css";

function Presentation() {
  return (
    <section className={styles.presentation}>
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
    </section>
  );
}

export default Presentation;
import styles from "./galleryImage.module.css";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react"

interface Props {
  screenshot: StaticImageData
}

function GalleryImage({ screenshot }: Props) {
  const [loaded, setLoaded] = useState(false)
  const classNames = `${styles.img} ${loaded ? styles.loaded : ""}`

  function onLoadingComplete() {
    setLoaded(true)
  }

  return (
    <div className={styles.galleryImage}>
      <Image
        key={screenshot.src}
        className={classNames}
        src={screenshot}
        alt="screen"
        placeholder="blur"
        onLoadingComplete={onLoadingComplete}
      />
    </div>
  );
}

export default GalleryImage;
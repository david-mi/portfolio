"use client"

import styles from "./galleryButton.module.css"
import { GalleryIcon } from "@/icons";

interface Props {
  onClick: () => void
  name: string
}

function GalleryButton({ onClick, name }: Props) {
  return (
    <button
      className={styles.galleryButton}
      aria-label={`Ouvrir la gallerie de screenshots de ${name}`}
      title={`Ouvrir la gallerie de screenshots de ${name}`}
      onClick={onClick} >
      <GalleryIcon />
    </button>
  );
}

export default GalleryButton;
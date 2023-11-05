"use client"

import styles from "./galleryButton.module.css"
import { GalleryIcon } from "@/icons";

interface Props {
  onClick: () => void
}

function GalleryButton({ onClick }: Props) {
  return (
    <button className={styles.galleryButton} onClick={onClick}>
      <GalleryIcon />
    </button>
  );
}

export default GalleryButton;
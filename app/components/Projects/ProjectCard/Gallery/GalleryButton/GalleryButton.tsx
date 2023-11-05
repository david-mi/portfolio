"use client"

import { GalleryIcon } from "@/icons";

interface Props {
  onClick: () => void
}

function GalleryButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <GalleryIcon />
    </button>
  );
}

export default GalleryButton;
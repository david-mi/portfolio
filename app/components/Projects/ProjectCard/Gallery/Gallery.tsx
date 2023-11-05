"use client"

import { useState, useEffect } from "react"
import ModaleLayout from "@/app/components/ModaleLayout/ModaleLayout";
import GalleryButton from "./GalleryButton/GalleryButton";
import { StaticImageData } from "next/image";
import { useCallback } from "react"
import Image from "next/image";
import styles from "./gallery.module.css"
import useEmblaCarousel from 'embla-carousel-react'

interface Props {
  screenshots: StaticImageData[]
}

function Gallery({ screenshots }: Props) {
  const [displayGallery, setDisplayGallery] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    console.log("click", emblaApi)
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      console.log("api")
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  useEffect(() => {
    document.body.style.overflowY = displayGallery
      ? "hidden"
      : "auto"
  }, [displayGallery])

  return displayGallery
    ? (
      <ModaleLayout onCloseButtonClick={() => setDisplayGallery(false)}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.container}>
            {screenshots.map((screenshot) => {
              return (
                <div key={screenshot.src} className={styles.slide}>
                  <Image
                    className={styles.img}
                    src={screenshot}
                    alt="screen"
                    placeholder="blur"
                    loading="eager"
                    style={{ width: "auto", height: "auto", padding: "5px" }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <button onClick={scrollPrev} className="embla__prev">Prev</button>
        <button onClick={scrollNext} className="embla__next">Next</button>
      </ModaleLayout >
    )
    : <GalleryButton onClick={() => setDisplayGallery(true)} />;
}

export default Gallery;
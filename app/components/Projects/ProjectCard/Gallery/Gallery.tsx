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
                  />
                </div>
              )
            })}
          </div>
          <button onClick={scrollPrev} className={styles.previous}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM9.97 15.53a.75.75 0 0 1 0-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0Z" clipRule="evenodd">
              </path>
            </svg>
          </button>
          <button onClick={scrollNext} className={styles.next}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM9.97 15.53a.75.75 0 0 1 0-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0Z" clipRule="evenodd">
              </path>
            </svg>
          </button>
        </div>
      </ModaleLayout >
    )
    : <GalleryButton onClick={() => setDisplayGallery(true)} />;
}

export default Gallery;
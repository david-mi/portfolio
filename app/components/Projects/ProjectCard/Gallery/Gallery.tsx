"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom";
import ModaleLayout from "@/app/components/ModaleLayout/ModaleLayout";
import GalleryButton from "./GalleryButton/GalleryButton";
import { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import GalleryImage from "./GalleryImage/GalleryImage";
import ArrowButton from "./ArrowButton/ArrowButton";

interface Props {
  screenshots: StaticImageData[]
  name: string
}

function Gallery({ screenshots, name }: Props) {
  const [displayGallery, setDisplayGallery] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = displayGallery
      ? "hidden"
      : "auto"
  }, [displayGallery])


  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <ArrowButton role="next" />,
    prevArrow: <ArrowButton role="previous" />,
    touchThreshold: 10
  };

  return displayGallery
    ? (
      createPortal(
        < ModaleLayout onCloseButtonClick={() => setDisplayGallery(false)
        }>
          <Slider {...settings}>
            {screenshots.map((screenshot) => {
              return <GalleryImage key={screenshot.src} screenshot={screenshot} />
            })}
          </Slider>
        </ModaleLayout >,
        document.getElementById("projects")!
      )

    )
    : <GalleryButton name={name} onClick={() => setDisplayGallery(true)} />;
}

export default Gallery;



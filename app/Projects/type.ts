
import { StaticImageData } from "next/image"

export type ProjectTags = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React" | "Redux" | "NextJs" | "Firebase"
export interface urls {
  github: string
  live: string
}

export interface Project {
  name: string,
  tags: ProjectTags[],
  description: string
  urls: urls
  previewSrc: StaticImageData
  screenshots: StaticImageData[]
}
import type { Project } from "./type"
import cheatSheetPreview from "@/public/projects/cheatsheet_git_github/preview.png"
import textractPreview from "@/public/projects/textract/preview.png"
import windatePickerPreview from "@/public/projects/react_windatepicker/preview.png"
import msnRebornPreview from "@/public/projects/msn_reborn/preview.png"

export const projectsData: Project[] = [
  {
    name: "MSN Reborn",
    tags: ["React", "TypeScript", "Redux", "Firebase"],
    description: "Application de chat, avec l'interface de MSN Messenger",
    urls: {
      live: "https://msn-reborn.vercel.app",
      github: "https://github.com/david-mi/MSN_Reborn"
    },
    previewSrc: msnRebornPreview,
    screenshots: []
  },
  {
    name: "React WindatePicker",
    tags: ["React", "TypeScript"],
    description: "Composant Date picker React avec l'interface de Windows 10",
    urls: {
      live: "https://react-windatepicker.vercel.app",
      github: "https://github.com/david-mi/React_WinDatepicker"
    },
    previewSrc: windatePickerPreview,
    screenshots: []
  },
  {
    name: "Textract",
    tags: ["TypeScript", "HTML", "CSS"],
    description: "Application d'extraction de texte contenu dans une image. Basé sur l'API Tesseract",
    urls: {
      live: "https://image-text-extractor.vercel.app",
      github: "https://github.com/david-mi/Image-Text-Extractor"
    },
    previewSrc: textractPreview,
    screenshots: []
  },
  {
    name: "CheatSheet Git/Gitub",
    tags: ["JavaScript", "HTML", "CSS"],
    description: "Cheat sheet interactive Git/Github",
    urls: {
      live: "https://david-mi.github.io/cheatsheet_git",
      github: "https://github.com/david-mi/cheatsheet_git"
    },
    previewSrc: cheatSheetPreview,
    screenshots: []
  }
]
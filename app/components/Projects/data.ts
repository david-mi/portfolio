import type { Project } from "./type"
import cheatSheetPreview from "@/public/projects/cheatsheet_git_github/preview.png"
import textractPreview from "@/public/projects/textract/preview.png"
import windatePickerPreview from "@/public/projects/react_windatepicker/preview.png"
import msnRebornPreview from "@/public/projects/msn_reborn/preview.png"

export const projectsData: Project[] = [
  {
    id: "af7c1fe6-d669-414e-b066-e9733f0de7a8",
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
    id: "08c71152-c552-42e7-b094-f510ff44e9cb",
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
    id: "c558a80a-f319-4c10-95d4-4282ef745b4b",
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
    id: "1ad1fccc-d279-46a0-8980-1d91afd6ba67",
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
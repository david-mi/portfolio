import type { Project } from "./type"
import cheatSheetPreview from "@/public/projects/cheatsheet_git_github/preview.png"
import textractPreview from "@/public/projects/textract/preview.png"
import windatePickerPreview from "@/public/projects/react_windatepicker/preview.png"
import msnRebornPreview from "@/public/projects/msn_reborn/preview.png"

import windatePickerScreenshot1 from "@/public/projects/react_windatepicker/screenshots/1.png"
import windatePickerScreenshot2 from "@/public/projects/react_windatepicker/screenshots/2.png"
import windatePickerScreenshot3 from "@/public/projects/react_windatepicker/screenshots/3.png"
import windatePickerScreenshot4 from "@/public/projects/react_windatepicker/screenshots/4.png"

import textractScreenshot1 from "@/public/projects/textract/screenshots/1.png"
import textractScreenshot2 from "@/public/projects/textract/screenshots/2.png"
import textractScreenshot3 from "@/public/projects/textract/screenshots/3.png"
import textractScreenshot4 from "@/public/projects/textract/screenshots/4.png"

import msnRebornScreenshot1 from "@/public/projects/msn_reborn/screenshots/1.png"
import msnRebornScreenshot2 from "@/public/projects/msn_reborn/screenshots/2.png"
import msnRebornScreenshot3 from "@/public/projects/msn_reborn/screenshots/3.png"
import msnRebornScreenshot4 from "@/public/projects/msn_reborn/screenshots/4.png"

import cheatsheetGitGithubScreenshot1 from "@/public/projects/cheatsheet_git_github/screenshots/1.png"
import cheatsheetGitGithubScreenshot2 from "@/public/projects/cheatsheet_git_github/screenshots/2.png"

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
    screenshots: [
      msnRebornScreenshot1,
      msnRebornScreenshot2,
      msnRebornScreenshot3,
      msnRebornScreenshot4
    ]
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
    screenshots: [
      windatePickerScreenshot1,
      windatePickerScreenshot2,
      windatePickerScreenshot3,
      windatePickerScreenshot4
    ]
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
    screenshots: [
      textractScreenshot1,
      textractScreenshot2,
      textractScreenshot3,
      textractScreenshot4
    ]
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
    screenshots: [
      cheatsheetGitGithubScreenshot1,
      cheatsheetGitGithubScreenshot2
    ]
  }
]
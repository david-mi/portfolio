import { YoutubeIcon, LinkedInIcon, GithubIcon, EmailIcon } from "@/icons"

export interface SocialData {
  name: string
  href: string
  label: string
  icon: JSX.Element
}

export const socialData: SocialData[] = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/david-michel-073b31222/",
    label: "Visiter mon profil linkedin",
    icon: <LinkedInIcon />
  },
  {
    name: "GitHub",
    href: "https://github.com/david-mi",
    label: "Visiter mon dépôt Github",
    icon: <GithubIcon />
  },
  {
    name: "Email",
    href: "mailto:david.michel2809@gmail.com",
    label: "Me contacter par email",
    icon: <EmailIcon />
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@david-mi",
    label: "Visiter ma chaîne Youtube",
    icon: <YoutubeIcon />
  }
]
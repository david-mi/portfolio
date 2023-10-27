import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins"
})

const classNames = `${inter.variable} ${poppins.variable}`

export const metadata: Metadata = {
  title: "David Michel",
  description: "David Michel, développeur Front End",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames}>{children}</body>
    </html>
  )
}

import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { content } from "./content"
import { themeClass } from "./_design/theme.css"

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: content.name
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${themeClass} ${montserrat.className}`}>
      <body>{children}</body>
    </html>
  )
}

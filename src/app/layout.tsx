import "./app.css"
import type { Metadata } from "next"
import { content } from "./content"
import { themeClass } from "./_design/theme.css"
import { Montserrat } from "next/font/google"

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

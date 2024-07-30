import { Bebas_Neue } from "next/font/google"
import { ReactNode } from "react"
import { h1 } from './text.css'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

export function H1({ children }: { children: ReactNode }) {
  return <h1 className={`${h1} ${bebas.className}`}>{children}</h1>
}

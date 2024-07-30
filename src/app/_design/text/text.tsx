import { Bebas_Neue } from "next/font/google"
import { ReactNode } from "react"
import { h1, h2, h3 } from './text.css'
import { match } from "ts-pattern"

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

type importance = 1 | 2 | 3
export function Heading({ importance, children }: { importance: importance, children: ReactNode }) {
  return match(importance)
  .with(1, () => <h1 className={`${h1} ${bebas.className}`}>{children}</h1>)
  .with(2, () => <h2 className={`${h2} ${bebas.className}`}>{children}</h2>)
  .with(3, () => <h3 className={`${h3} ${bebas.className}`}>{children}</h3>)
  .exhaustive()
}
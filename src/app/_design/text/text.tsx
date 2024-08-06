import { ReactNode } from "react"
import { h1, h2, h3, h4 } from './text.css'
import { match } from "ts-pattern"
import { theme } from "../theme.css"

type importance = 1 | 2 | 3 | 4
export function Heading({ importance, variant = 'black', children }: { importance: importance, variant?: keyof typeof theme.color, children: ReactNode }) {
  return match(importance)
  .with(1, () => <h1 className={h1}>{children}</h1>)
  .with(2, () => <h2 className={h2}>{children}</h2>)
  .with(3, () => <h3 className={h3[variant]}>{children}</h3>)
  .with(4, () => <h4 className={h4[variant]}>{children}</h4>)
  .exhaustive()
}
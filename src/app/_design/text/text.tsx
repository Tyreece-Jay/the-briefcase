import { ReactNode } from "react"
import { h1, h2, h3, h4, h5, text } from './text.css'
import { match } from "ts-pattern"
import { theme } from "../theme.css"

type importance = 1 | 2 | 3 | 4 | 5
export function Heading({ importance, colour = 'black', children }: { importance: importance, colour?: keyof typeof theme.colour, children: ReactNode }) {
  return match(importance)
  .with(1, () => <h1 className={h1}>{children}</h1>)
  .with(2, () => <h2 className={h2}>{children}</h2>)
  .with(3, () => <h3 className={h3[colour]}>{children}</h3>)
  .with(4, () => <h4 className={h4[colour]}>{children}</h4>)
  .with(5, () => <h5 className={h5[colour]}>{children}</h5>)
  .exhaustive()
}

export function Text({children} : {children: ReactNode}) {
  return <text className={text}>{children}</text>
}
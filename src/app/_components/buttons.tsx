'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "./button.module.css"
import { ReactNode } from "react"

const hover = {scale: 1.1}
const transition = { type: "spring", damping: 10, stiffness: 100}
const tap = {scale: 0.9}

export function Button({ children, onClick, noMotion }: { children: ReactNode, onClick: () => any, noMotion?: boolean }) {
  return <motion.button onClick={onClick} whileHover={!noMotion ? hover : undefined} transition={transition} whileTap={tap} className={styles.button}>
    {children}
  </motion.button>
}

export function IconButton({ icon, href, newTab }: { icon: IconDefinition, href: string, newTab?: boolean }) {
  return <motion.a whileHover={hover} transition={transition} whileTap={tap} href={href} target={newTab ? "_blank" : undefined}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </motion.a>
}


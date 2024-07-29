'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "./button.module.css"
import { ReactNode } from "react"

const hover = { scale: 1.1 }
const transition = { type: "spring", damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, onClick, noMotion }: { children: ReactNode, onClick: () => any, noMotion?: boolean }) {
  return <motion.button onClick={onClick} whileHover={!noMotion ? hover : undefined} transition={transition} whileTap={tap} className={styles.button}>
    {children}
  </motion.button>
}

export function IconButton({ icon, href }: { icon: IconDefinition, href: string }) {
  return <motion.a whileHover={hover} transition={transition} whileTap={tap} href={href} target={"_blank"}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </motion.a>
}

export function ScrollButton({ icon, href }: { icon: IconDefinition, href: string }) {
  return <motion.a animate={{ y: [0, -20, 0] }} transition={{
    duration: 2, ease: "easeInOut",
    times: [0, 0.2], repeat: Infinity
  }} href={href}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </motion.a>
}

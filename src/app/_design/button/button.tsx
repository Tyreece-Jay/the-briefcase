'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { button, buttonIcon, icon } from "./button.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const hover = { scale: 1.1 }
const transition = { type: "spring", damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, onClick, noMotion }: { children: ReactNode, onClick: () => any, noMotion?: boolean }) {
  return <motion.button className={button} onClick={onClick} whileHover={!noMotion ? hover : undefined} transition={transition} whileTap={tap}>
    {children}
    <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
  </motion.button>
}

export function IconButton({ icon: iconDef, href }: { icon: IconDefinition, href: string }) {
  return <motion.a whileHover={hover} transition={transition} whileTap={tap} href={href} target={"_blank"}>
    <FontAwesomeIcon icon={iconDef} className={icon} />
  </motion.a>
}

export function ScrollButton({ icon: iconDef, href }: { icon: IconDefinition, href: string }) {
  return <motion.a animate={{ y: [0, -20, 0] }} transition={{
    duration: 2, ease: "easeInOut",
    times: [0, 0.2], repeat: Infinity
  }} href={href}>
    <FontAwesomeIcon icon={iconDef} className={icon} />
  </motion.a>
}

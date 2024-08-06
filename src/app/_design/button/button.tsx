'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { button, buttonIcon, icon, submitButton } from "./button.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const hover = { scale: 1.1 }
const transition = { type: "spring", damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, onClick }: { children: ReactNode, onClick: () => any }) {
  return <motion.button className={button} onClick={onClick} whileHover={hover} transition={transition} whileTap={tap}>
    {children}
    <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
  </motion.button>
}

export function SubmitButton({ children, onClick }: { children: ReactNode, onClick: () => any}) {
  return <motion.button className={submitButton} onClick={onClick} transition={transition} whileTap={tap}>
    {children}
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

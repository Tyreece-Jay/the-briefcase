'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { button, buttonIcon, icon, largeButton, submitButton, content, link } from "./button.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Text } from "@/app/_design/text/text"
import Link from "next/link"

const hover = { scale: 1.1 }
const transition = { type: "spring", damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, href }: { children: ReactNode, href: string }) {
  return <Link className={link} target="_blank" href={href}>
    <motion.button className={button} whileHover={hover} transition={transition} whileTap={tap}>
      <Text>{children}</Text>
      <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
    </motion.button>
  </Link>
}

export function LargeButton({ icon, children, onClick }: { icon: IconDefinition, children: ReactNode, onClick: () => any }) {
  return <motion.button className={largeButton} onClick={onClick} whileHover={{ scale: 1.02 }} transition={transition} whileTap={tap}>
    <div className={content}>
      <FontAwesomeIcon icon={icon} className={buttonIcon} />
      {children}
    </div>
    <div className={content}>
      <Text>View</Text>
      <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
    </div>
  </motion.button>
}

export function SubmitButton({ children, onClick }: { children: ReactNode, onClick: () => any }) {
  return <motion.button className={submitButton} onClick={onClick} transition={transition} whileTap={tap}>
    <Text>{children}</Text>
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

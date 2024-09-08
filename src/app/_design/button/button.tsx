'use-client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { button, buttonIcon, icon, largeButton, submitButton, content, link, largeLink, contentButton } from "./button.css"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Text } from "@/app/_design/text/text"
import Link from "next/link"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

const hover = { scale: 1.1 }
const transition = { type: "spring", damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, href }: { children: ReactNode, href: string }) {
  return <Link className={link} target="_blank" href={href}>
    <motion.button className={`${button} ${montserrat.className}`} whileHover={hover} transition={transition} whileTap={tap}>
      <Text>{children}</Text>
      <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
    </motion.button>
  </Link>
}

export function LargeButton({ icon, children, href }: { icon: IconDefinition, children: ReactNode, href: string }) {
  return <Link className={largeLink} target="_blank" href={href}>
    <motion.button className={`${largeButton} ${montserrat.className}`} whileHover={{ scale: 1.02, borderRadius: '3rem' }} transition={transition} whileTap={tap}>
      <div className={content}>
        <FontAwesomeIcon icon={icon} className={buttonIcon} />
        {children}
      </div>
      <div className={contentButton}>
        <Text>View</Text>
        <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
      </div>
    </motion.button>
  </Link>
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return <motion.button className={`${submitButton} ${montserrat.className}`} type='submit' transition={transition} whileTap={tap}>
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

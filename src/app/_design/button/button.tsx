'use-client'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { button, buttonIcon, icon, largeButton, submitButton, link, largeLink, largeButtonIcon } from './button.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Text } from '@/app/_design/text/text'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const hover = { scale: 1.1 }
const transition = { type: 'spring', damping: 10, stiffness: 100 }
const tap = { scale: 0.9 }

export function Button({ children, href }: { children: ReactNode, href: string }) {
  return <Link className={link} target='_blank' href={href}>
    <button className={`${button} ${montserrat.className}`}>
      <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
      <Text style='bold'>{children}</Text>
    </button>
  </Link>
}

export function LargeButton({ icon, children, href }: { icon: IconDefinition, children: ReactNode, href: string }) {
  return <Link className={largeLink} target='_blank' href={href}>
    <motion.button className={`${largeButton} ${montserrat.className}`} transition={transition} whileTap={tap}>
      <FontAwesomeIcon icon={icon} className={largeButtonIcon} />
      {children}
    </motion.button>
  </Link>
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return <motion.button className={`${submitButton} ${montserrat.className}`} type='submit' transition={transition} whileTap={tap}>
    <FontAwesomeIcon icon={faArrowRight} className={buttonIcon} />
    <Text style='bold'>{children}</Text>
  </motion.button>
}

export function IconButton({ icon: iconDef, href }: { icon: IconDefinition, href: string }) {
  return <motion.a whileHover={hover} transition={transition} whileTap={tap} href={href} target={'_blank'}>
    <FontAwesomeIcon icon={iconDef} className={icon} />
  </motion.a>
}

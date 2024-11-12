'use client'

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { icon, toast } from "./toast.css"
import { Text } from "@/app/_design/text/text"

export default function Toast() {
  const dropIn = {
    hidden: { y: "-100vh", x: "-50%", opacity: 0 },
    visible: { y: "0", x: "-50%", opacity: 1, transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 } },
    exit: { y: "100vh", x: "-50%", opacity: 0 }
  }

  return <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className={toast}>
    <FontAwesomeIcon icon={faPaperPlane} className={icon} />
    <Text style='toast'>Your request has been sent!</Text>
  </motion.div>
}
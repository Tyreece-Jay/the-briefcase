'use client'

import Hero from "./_sections/hero/hero"
import Skills from "./_sections/skills/skills"
import Journey from "./_sections/journey/journey"
import Contact from "./_sections/contact/contact"
import How from "./_sections/how/how"
import { Text } from "@/app/_design/text/text"
import { footer } from "./app.css"

export default function Home() {
  return <main>
    <Hero />
    <Skills />
    <Journey />
    <Contact />
    <How />
    <footer className={footer}><Text>© Tyreece Simpson, {new Date().getFullYear()}</Text></footer>
  </main>
}
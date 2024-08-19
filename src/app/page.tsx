import { ToastContainer } from "react-toastify"
import About from "./_sections/about/about"
import Hero from "./_sections/hero/hero"
import Skills from "./_sections/skills/skills"
import Journey from "./_sections/journey/journey"
import Contact from "./_sections/contact/contact"
import How from "./_sections/how/how"
import { Text } from "@/app/_design/text/text"
import { footer } from "./app.css"

export default function Home() {
  return <main>
    <ToastContainer />
    <Hero />
    <About />
    <Skills />
    <Journey />
    <Contact />
    <How />
    <footer className={footer}><Text>© Tyreece Simpson, {new Date().getFullYear()}</Text></footer>
  </main>
}

// TODO: make particles consistent in all backgrounds

// TODO: have dev and prod builds
// TODO: get gh pages working
// TODO: add resend
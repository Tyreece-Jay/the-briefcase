import { ToastContainer } from "react-toastify"
import About from "./_sections/about/about"
import Hero from "./_sections/hero/hero"
import Skills from "./_sections/skills/skills"
import Journey from "./_sections/journey/journey"
import Contact from "./_sections/contact/contact"

export default function Home() {
  return <main>
    <ToastContainer />
    <Hero />
    <About />
    <Skills />
    <Journey />
    <Contact />
    <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
  </main>
}

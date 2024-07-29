import About from "./_about/about"
import Hero from "./_hero/hero"
import Experience from "./_experience/experience"
import Contact from "./_contact/contact"
import Skills from "./_skills/skills"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
      <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
    </main>
  )
}

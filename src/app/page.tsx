import About from "./_sections/about/about"
import Hero from "./_sections/hero/hero"
import Experience from "./_sections/experience/experience"
import Contact from "./_sections/contact/contact"
import Skills from "./_sections/skills/skills"

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

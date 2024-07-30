import About from "./_sections/about/about"
import Hero from "./_sections/hero/hero"
import Work from "./_sections/work/work"
import Contact from "./_sections/contact/contact"
import Skills from "./_sections/skills/skills"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
    </main>
  )
}

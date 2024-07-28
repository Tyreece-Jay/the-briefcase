import About from "./_about/about"
import Hero from "./_hero/hero"
import Experience from "./_experience/experience"
import { Slider } from "./_about/slider"
import { content } from "./content"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Slider items={content.skills}/>
      <Experience/>
      <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
    </main>
  )
}

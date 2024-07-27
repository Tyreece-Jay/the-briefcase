import About from "./_about/about"
import Header from "./_header/header"
import Experience from "./_experience/experience"
import { Slider } from "./_about/slider"
import { content } from "./content"

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Slider items={content.skills}/>
      <Experience/>
      <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
    </main>
  )
}

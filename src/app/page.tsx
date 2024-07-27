import About from "./about"
import Experience from "./experience"
import Header from "./header"
import "./globals.css"

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Experience/>
      <footer>© Tyreece Simpson, {new Date().getFullYear()}</footer>
    </main>
  )
}

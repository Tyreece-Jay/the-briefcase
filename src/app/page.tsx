import About from "./_about/about"
import Header from "./_header/header"
import Experience from "./_experience/experience"
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

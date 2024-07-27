import { content } from "../content"
import styles from "./about.module.css"
import { Slider } from "./slider"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>// ABOUT ME</h2>
      <div className={styles.content}>
        <p>{content.about}</p>
      </div>
      <button className={styles.button}>Request my CV</button>
      <Slider items={content.skills}/>
    </section>
  )
}

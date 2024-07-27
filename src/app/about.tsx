import styles from "./about.module.css"
import { content } from "./content"

export default function About() {
  return (
    <section className={styles.about}>
      <h2>// ABOUT ME</h2>
      <div className={styles.content}>
        <p>{content.about}</p>
      </div>
      <button className={styles.button}>Request my CV</button>
    </section>
  )
}

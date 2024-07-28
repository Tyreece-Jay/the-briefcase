import { content } from "../content"
import styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.background}>
      </div>
      <div className={styles.about}>
        <div>
          <h2 className={styles.heading}>{'// ABOUT ME'}</h2>
          <button className={styles.button}>REQUEST MY CV</button>
        </div>
        <p>{content.about}</p>
      </div>
    </section>
  )
}

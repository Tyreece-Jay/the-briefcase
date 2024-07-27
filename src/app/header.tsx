import React from 'react'
import styles from './header.module.css'
import { content } from './content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
  return <div className={styles.container}>
    <div className={styles.header}>
    <Icons/>
    <div className={styles.headerText}>
        <h1>{content.name}</h1>
        <h3>{content.occupation.primary}</h3>
      </div>
      <span className={styles.button}></span>
    </div>
  </div>
}

function Icons() {
  return <div>
    <FontAwesomeIcon icon={faBuilding} />
    {/* <span className='button' aria-label='LinkedIn'><i className="fa-brands fa-linkedin fa-3x transparent-background" ></i></span>
    <span className='button' aria-label='Figma' ><i className="fa-brands fa-figma fa-3x transparent-background" ></i></span>
    <span className='button' aria-label='GitHub' ><i className="fa-brands fa-github fa-3x transparent-background" ></i></span> */}
  </div>
}

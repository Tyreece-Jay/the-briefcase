'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Particles as TsParticles, initParticlesEngine } from "@tsparticles/react"
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import styles from './header.module.css'

export default function Particles() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          width: 1
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: { enable: true },
          value: 80
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
      },
      detectRetina: true
    }), []
  )

  if (init) { return <TsParticles id="tsparticles" options={options} className={styles.particles} /> }
}
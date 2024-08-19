'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Particles as TsParticles, initParticlesEngine } from "@tsparticles/react"
import { type ISourceOptions, MoveDirection } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import { particles } from './hero.css'

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
        move: {
          direction: MoveDirection.none,
          enable: true,
          random: false,
          speed: 0.5,
          straight: false
        },
        number: {
          density: { enable: true },
          value: 120
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } }
      },
      detectRetina: true
    }), []
  )

  if (init) { return <TsParticles id="tsparticles" options={options} className={particles} /> }
}
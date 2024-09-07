'use client'

import React from 'react'
import { content } from '../../content'
import { faFigma, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect'
import { IconButton, ScrollButton } from '../../_design/button/button'
import { Heading } from '../../_design/text/text'
import { heading, section, icons, overlay } from './hero.css'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'

export default function Hero() {
  return <section className={section}>
    <ShaderGradientCanvas>
      <ShaderGradient control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23F6FFFD&bgColor2=%232B0AFF&brightness=1.2&cAzimuthAngle=160&cDistance=3.5&cPolarAngle=100&cameraZoom=1&color1=%236FFFE9&color2=%2379A3F6&color3=%236FFFE9&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-0.5&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=70&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.2&uStrength=4&uTime=0&wireframe=false&zoomOut=false' />
    </ShaderGradientCanvas>
    <div className={overlay}>
      <Icons />
      <div className={heading}>
        <Heading importance={1}>{content.name}</Heading>
        <Heading importance={2}>
          <Typewriter options={{ strings: content.occupation, autoStart: true, loop: true, skipAddStyles: false }} />
        </Heading>
      </div>
      <ScrollButton icon={faAngleDoubleDown} href="#about" />
    </div>
  </section>
}

function Icons() {
  return <div className={icons}>
    <IconButton icon={faLinkedin} href="https://linkedin.com/in/tyreece-simpson" />
    <IconButton icon={faFigma} href="https://www.figma.com/@tyreece" />
    <IconButton icon={faGithubSquare} href="https://github.com/Tyreece-Jay" />
  </div>
}

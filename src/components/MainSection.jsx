import React from 'react'
import LandingSection from './LandingSection/LandingSection'
import SpecialsSection from './SpecialsSection/SpecialsSection'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'
import About from './About/About'

function Main() {
  return (
    <main>
      <LandingSection/>
      <SpecialsSection/>
      <TestimonialsSection/>
      <About/>
    </main>
  )
}

export default Main
import React from 'react'
import Landing from './Landing/Landing'
import Specials from './Specials/Specials'
import TestimonialsList from './Testimonials/TestimonialsList'
import About from './About/About'

function Main() {
  return (
    <main>
      <section>
        <Landing/>
      </section>
      <section>
        <Specials/>
      </section>
      <section>
        <TestimonialsList/>
      </section>
      <section>
        <About/>
      </section>
    </main>
  )
}

export default Main
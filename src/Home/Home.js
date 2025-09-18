import React from 'react'

import Hero from "../sections/Hero"
import About from '../sections/About'
import Services from '../sections/Services'
import OurProcess from '../sections/OurProcess'
import Industries from '../sections/Industries'
import Technologies from '../sections/Technologies'
// import Contact from '../sections/Contact'
import GetInTouch from '../sections/GetInTouch'
import FAQ from '../sections/FAQ'
import WhyUsPage from '../sections/WhyUsPage'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <OurProcess />
      <WhyUsPage />
      <Industries />
      <Technologies />
      <FAQ />
      <GetInTouch />
    </div>
  )
}

export default Home

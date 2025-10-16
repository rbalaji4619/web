import React from 'react'
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Burj Tech Consultancy - Innovative IT Solutions & Digital Services</title>
        <meta name="description" content="Discover Burj Tech Consultancy: Your trusted partner for web development, UI/UX design, app development, AI/ML, cloud services, and more. Explore our process, industries, technologies, and why choose us." />
        <link rel="canonical" href="https://www.btcglobal.info/" />
      </Helmet>
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
    </>
  )
}

export default Home
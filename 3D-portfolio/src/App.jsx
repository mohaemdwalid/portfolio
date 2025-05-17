import React from 'react'
import HeroExperience from "./components/HeroModel/HeroExperience"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import LogoBrands from "./sections/LogoBrands"
import ShowCase from "./sections/ShowCase"
import Footer from "./sections/Footer"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ShowCase/>
      <LogoBrands/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
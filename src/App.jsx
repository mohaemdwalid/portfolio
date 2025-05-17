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
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div className="relative z-0">
          <h1>Mohamed Walid</h1>
          <p>Welcome to my portfolio</p>
        </div>
      </div>
    </div>
  )
}

export default App
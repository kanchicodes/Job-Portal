import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
// import CtegoryCarousel from './CtegoryCarousel'
import  LatestJob  from './LatestJob'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        {/* <CtegoryCarousel/> */}
        <LatestJob/>
        <Footer/>
    </div>
  )
}
export default Home
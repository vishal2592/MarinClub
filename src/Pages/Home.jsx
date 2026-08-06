import React from 'react'
import Hero from '../Components/Hero'
import Comparison from '../Components/Comparison'
import WhyChooseUs from '../Components/WhyChooseUs'
import InvestmentPlan from '../Components/InvestmentPlan'
import Testimonial from '../Components/Testimonial'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Comparison />
        <WhyChooseUs />
        <InvestmentPlan />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home
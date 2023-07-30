import React from 'react'
import Header from './components/header/header' 
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/Experience/experience'
// import Services from './components/services/services'
// import Portfolio from './components/portfolio/portfolio'
// import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
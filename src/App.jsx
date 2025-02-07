import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Internship from './components/Internship'            
import About_ME from './components/About_ME'
import Amazon from './components/Amazon'
import Formula_1 from './components/Formula_1'
import RL from './components/RL'
import Facerecognition from './components/Facerecognition'
import Devlopment from './components/Devlopment'
import MachineLearning from './components/MachineLearning'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Element, scroller } from 'react-scroll'
import Afame from './components/Afame'

function App() {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <Router>
      <div className='w-full min-h-screen text-[#eee1c5]'>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Element name="landingPage"><LandingPage/></Element>
              <Element name="marquee"><Marquee/></Element>
              <Element name="aboutme"><About/></Element>
              <Element name="eyes"><Eyes/></Element>
              <Element name="projects"><Featured/></Element>
              <Element name="experience"><Internship/></Element>
              <Element name="cards"><Cards/></Element>
              <Element name="contact"><Footer/></Element>
              {/* <Element name="aboutme"><About_ME/></Element> */}
            </>
          } />
          <Route path="/projects" element={<Featured />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/about_me" element={<About_ME />} />
          <Route path="/experience" element={<Internship />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/afame" element={<Afame />} />
          <Route path="/formula1" element={<Formula_1 />} />
          <Route path="/reinforcementlearning" element={<RL />} />
          <Route path="/facedetection" element={<Facerecognition />} />
          <Route path="/devlopment" element={<Devlopment />} />
          <Route path="/machinelearning" element={<MachineLearning />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
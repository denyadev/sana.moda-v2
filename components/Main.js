import React from 'react'
import Hero from './Main/Hero'
import About from './Main/About'
import Projects from './Main/Projects'
import ContactBox from './Main/ContactBox'

const Main = () => {
  return (
    <>
        <section id="home">
            <Hero />
        </section>
            
        <section id="about">
            <About />
        </section>

        <section id="projects">
            <Projects />
        </section>

        <section id="contact">
            <ContactBox />
        </section>


 
      
    </>
  )
}

export default Main
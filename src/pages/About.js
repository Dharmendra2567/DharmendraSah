import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Footer } from '../components/Footer'
import AboutSection from '../components/AboutSection'

const About = () => {
    return (
        <>
            <div className='container-fluid'>
                <Navbar />
               <AboutSection/>
                <Footer/>
            </div>
        </>
    )
}

export default About
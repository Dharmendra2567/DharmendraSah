import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Quote from './Quote';
import { observeIntersection } from '../utility/userInterfaceObserver';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { Footer } from '../components/Footer';

const HomePage = () => {
    const aboutMeRef = useRef(null);
    const headerRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const image = document.querySelector('.intro-image');
        const text = document.querySelector('.intro-text');

        // Add the show class to trigger the animation on page load for the intro section
        image.classList.add('show');
        text.classList.add('show');

        observeIntersection([headerRef, textRef, buttonRef]);
    }, []);

    return (
        <>
            <div className='container-fluid d-flex flex-column'>
                <Navbar />
                <div className='row'>
                    <div className='intro w-100 '>
                        <div className='flex-item w-100'>
                            <img src="./images/my_pic.png" alt='' className='intro-image' />
                        </div>
                        <div className='d-flex flex-column flex item w-100 h-100 p-lg-5 '>
                            <div className='intro-text  text-center'>
                                <h1 className='header-text'>Dharmendra Sah</h1>
                                <p className='text-dark font-oswald fs-5 fw-bolder'>Software Engineer | Full Stack Developer</p>

                            </div>
                            <div className=' flex-item qot px-3'>
                                <Quote />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='about d-flex flex-column align-items-center justify-content-center' ref={aboutMeRef}>
                        <h1 className='p-4 about-me-header header-text' ref={headerRef}>About Me</h1>
                        <p className='about-me-text about-text para-text text-lg-center' ref={textRef}>Hello, I’m a Data Engineer with 5+ years of real-world experience. My focus is on data structure, blending,
                            and conversion. I’m all about converting raw data into useful insights, leveraging cutting-edge tech and smart methods for efficient data solutions. I’m in
                            Australia now but originally from Nepal. My journey kicked off at Cotiviti, where I spent 4.5 years fine-tuning my skills. After that, I took on the ro
                            le of Senior Data Engineer at Abacus Insights. I’m super enthusiastic about using data-driven solutions to tackle tough problems.</p>
                        <button className='px-4 m-3 about-button' ref={buttonRef}>Know More</button>
                    </div>
                </div>
                <ProjectSection/>
                <ContactSection/>
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;

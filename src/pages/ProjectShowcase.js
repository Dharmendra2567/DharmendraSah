import React from 'react';
import Navbar from '../components/layout/Navbar';
import ProjectSection from '../components/ProjectSection';
import { Footer } from '../components/Footer';

 export const ProjectShowcase = () => {
    return (
        <>
           <div className='container-fluid'>
          <Navbar/>
          <div className='' style={{marginTop:'60px'}}>
          <ProjectSection/>
          </div>
          <Footer/>

          </div>
        </>
    );
}

// export default ProjectShowcase;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { observeIntersection } from '../utility/userInterfaceObserver';

 export const ProjectSection = () => {
    const timelineRef1 = useRef(null);
    const timelineRef2 = useRef(null);
    const timelineRef3 = useRef(null);
    const timelineRef4 = useRef(null);

    useEffect(()=>{
        observeIntersection([timelineRef1,timelineRef2,timelineRef3,timelineRef4]);
    },[])
    return (
        <>
           {/* <div className='container-fluid'> */}
           <div className='row'>
            <h2 className='text-center mt-3 p-3 header-text'>Project Showcase</h2>
                <div className='timeline-container d-flex flex-md-nowrap '>
                    <div className='timeline flex-item '>
                        <div className='timeline-item' ref={timelineRef1}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2022 Jul - 2022 Dec</h4>
                                <h5>MERN Stack Development</h5>
                                <h6>Dursikshya Education Network</h6>
                                <p>
                                In my experience with MERN development, I've bulit complete <Link to={'https://github.com/Dharmendra2567/myapp-frontend-'}><b>E-commerce</b></Link> website where  I’ve implemented key 
                                features like efficient state management, seamless API and Payment integration, and optimized database queries.
                                </p>
                            </div>
                        </div>
                        <div className='timeline-item'  ref={timelineRef2}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2023 Jan - 2023 Mar</h4>
                                <h5>FullStack Development</h5>
                                <h6>Satya PG Web App</h6>
                                <p>
                                    Developed a fully dynamic furnished with frontend and backend website for <Link 
                                    to={'https://satya-pg.netlify.app/'}><b>Satya PG</b></Link><Link 
                                    to={'https://github.com/Dharmendra2567/jannat_hostel'}><b>(github)</b></Link> where I've 
                                    implemented API and Payment integration, user role based and database queries.It will be deployed soon.
                                     </p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline flex-item' >
                        <div className='timeline-item'  ref={timelineRef3}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                                <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2024 Jun - 2024 Aug</h4>
                                <h5>Flutter App Development</h5>
                                <Link to={'https://github.com/Dharmendra2567/chitChat-app'} ><h6>chitChat App</h6></Link>
                                <p>
                                Utilized a robust tech stack consisting of Dart, Flutter, and Firebase Cloud to effectively handle user data,
                                 integrated authentication, and enabled seamless text and media sharing throughout the app.
                                </p>
                            </div>
                        </div>
                        <div className='timeline-item'  ref={timelineRef4}>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2023 Nov - 2024 May</h4>
                                <h5>MERN Stack Development</h5>
                                <Link to={'https://github.com/Dharmendra2567/TimeLoggerApplication'}><h6>Time Logger</h6></Link>
                                <p>
                                Developed a Time Management web app with user authentication, enabling task logging on any date. 
                                It enhances the traditional to-do list by calculating total time spent on tasks, helping users efficiently 
                                track productivity and manage their schedules.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* </div> */}
        </>
    );
}

export default ProjectSection;

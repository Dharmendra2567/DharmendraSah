import React from 'react';
import { Link } from 'react-router-dom';

 export const ProjectSection = () => {
    return (
        <>
           {/* <div className='container-fluid'> */}
           <div className='row'>
            <h2 className='text-center mt-3 p-3 header-text'>Project Showcase</h2>
                <div className='timeline-container d-flex flex-md-nowrap '>
                    <div className='timeline flex-item '>
                        <div className='timeline-item'>
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
                        <div className='timeline-item'>
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
                                    to={'https://github.com/Dharmendra2567/jannat_hostel'}><b>Satya PG</b></Link> where I've 
                                    implemented API and Payment integration, user role based and database queries.It will be deployed soon.
                                     </p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline flex-item'>
                        <div className='timeline-item'>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                                <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2022 Dec - 2023 Aug</h4>
                                <h5>Senior Software Engineer</h5>
                                <h6>Abacus Insights</h6>
                                <p>
                                    Leveraged a powerful tech stack comprising of Databricks, Snowflake, and AWS to efficiently manage data warehouses, ETL workflows, ensuring seamless data processing and delivery.
                                </p>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <div className='timeline-icon'>
                                <i className='icon-placeholder'></i>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-content'>
                                <h4>2018 Jun - 2022 Nov</h4>
                                <h5>Software Engineer</h5>
                                <h6>Cotiviti Nepal</h6>
                                <p>
                                    Developed and implemented a highly efficient data ingestion and data warehouse, tailored specifically for processing US Healthcare data, ensuring seamless data processing and delivery.
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

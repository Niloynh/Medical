import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faPumpMedical } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';



const About = () => {
    return (
        <div className="container">
            <h1 className="text-center service-text">About <span>Us</span></h1>
            <div className="chooseUs">
                <h1 className="text-center my-3 chooseUsText">Why Choose Us?</h1>
                <a href="https://www.youtube.com/watch?v=tpBI7RhVHNI" target="_blank" rel="noreferrer">
                    <button className="play-btn"><FontAwesomeIcon icon={faPlay} /></button> 
                </a>
                <p className="text-center mt-3 fw-bold look-text">Watch Video</p>
            </div>

                <div className="row my-5">
                    <div className="col-4 d-flex">
                        <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faBookMedical} />
                        </div>
                        <div className="about-text">
                            <h4>Advanced medical technologies</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                    <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faPumpMedical} />
                        </div>
                        <div className="about-text">
                            <h4>High professionalism of specialists</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                    <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faLocationArrow} />
                        </div>
                        <div className="about-text">
                            <h4>High professionalism of specialists</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-4 d-flex">
                        <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faTruckLoading} />
                        </div>
                        <div className="about-text">
                            <h4>Advanced medical technologies</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                    <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faFileMedicalAlt} />
                        </div>
                        <div className="about-text">
                            <h4>Advanced medical technologies</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex">
                    <div className="h-50 about-icon">
                            <FontAwesomeIcon icon={faFileMedical} />
                        </div>
                        <div className="about-text">
                            <h4>Advanced medical technologies</h4>
                            <p>Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
            <Carousel>
            <div className="carousel-item">
            <img
                className="d-block w-100"
                src="https://i.ibb.co/NSXmyt9/dentist-6225092-1.jpg"
                alt="First slide"
            />
            <div className="carousel-caption">
                <h3>Medical</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <div className="slider-btn">
                <Link to="/service"><button className="btn-1 mx-3">Our Services</button></Link>
                    <button className="btn-2 mx-3">Get a quote</button>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img
                className="d-block w-100"
                src="https://i.ibb.co/CKb7MPh/pexels-rodnae-productions-6129049-1.jpg"
                alt="Second slide"
            />
        
            <div className="carousel-caption">
                <h3>Professionalism</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="slider-btn">
                <Link to="/service"><button className="btn-1 mx-3">Our Services</button></Link>
                    <button className="btn-2 mx-3">Get a quote</button>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img
                className="d-block w-100"
                src="https://i.ibb.co/QYBVt22/pexels-gustavo-fring-3985163-1.jpg"
                alt="Third slide"
            />
        
            <div className="carousel-caption">
                <h3>Technologies</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <div className="slider-btn">
                    <Link to="/service"><button className="btn-1 mx-3">Our Services</button></Link>
                    <button className="btn-2 mx-3">Get a quote</button>
                </div> 
            </div>
            </div>
        </Carousel>
    );
};

export default Banner;



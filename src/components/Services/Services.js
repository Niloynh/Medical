import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
// https://niloynh.github.io/jsonapi/service.JSON

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('https://niloynh.github.io/jsonapi/service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="m-3">
            <h1 className="text-center service-text">Our <span className="">Services</span></h1>
           {services.length === 0 ? 
            <span><Spinner animation="border" variant="warning" className="d-block mx-auto fs-5 mt-3"/></span>
            :
            <Row xs={1} md={3} className="g-4 card-container">
            {
                services.map(service => <Service
                    key={service.key}
                    service={service}
                    ></Service>)
            }
            </Row>}
        </div>
    );
};

export default Services;



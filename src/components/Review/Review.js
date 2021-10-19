import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Review.css';

const Review = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState([])

    useEffect(() => {
        const url = (`https://niloynh.github.io/jsonapi/service.json/${serviceId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
    return (
        <div>
            <Row xs={1} md={1} className="g-4 mx-auto w-75 mt-5">
                <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{service.category}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Review;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';
const Service = (props) => {
    const {id, category, description, img} = props.service

    // state
    const history = useHistory() 

    const url = `/service/${id}`;

    const handleDetail = () => {
        history.push(url)
    }
    return (
            <Col>
                <Card className="card-container pb-3">
                    <Card.Img variant="top" src={img} className="card-img"/>
                    <Card.Body className="card-body">
                    <Card.Title>{category}</Card.Title>
                    <Card.Text className="card-descrip mb-5">
                        {description}
                    </Card.Text>
                    <button onClick={handleDetail} className="btn-2 text-center mx-auto w-50 my-3 d-block">View Details</button>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Service;
import React from 'react';
import './SingleService.css';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const SingleService = props => {
    const { id, name, details, image } = props.service;
    const { showFull } = props;
    const showFullDetails = showFull ? details : details.slice(0, 50);
    const imageClass = showFull ? "img-fluid" : "img-fluid card-image";

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} className={imageClass} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {showFullDetails}
                    </Card.Text>

                    <NavLink to={`/service/${id}`} className="btn btn-primary w-100">
                        <FontAwesomeIcon icon={faEye} className="me-2" />
                        View
                    </NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;
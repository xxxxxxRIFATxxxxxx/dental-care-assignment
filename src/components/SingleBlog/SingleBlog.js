import React from 'react';
import './SingleBlog.css';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleDoctor = props => {
    const { id, name, details, image } = props.blog;
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

                    <NavLink to={`/blog/${id}`} className="btn btn-primary w-100">View</NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleDoctor;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Row xs={1} md={2} className="gx-2 gy-4 my-5">
            <Col>
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title className="display-4 text-primary">Care Your Teeth</Card.Title>
                        <Card.Text>
                            Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders.
                        </Card.Text>

                        <NavLink to="/service" className="btn btn-primary px-4">Service</NavLink>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="border-0">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faTooth} className="tooth-icon text-primary" />
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default Banner;
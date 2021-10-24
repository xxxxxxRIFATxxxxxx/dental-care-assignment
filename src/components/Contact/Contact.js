import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <Container className="py-5 mt-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="border-0">
                        <Card.Body className="text-center">
                            <Card.Title className="display-4 metal-font mb-3 text-primary fw-bold">Contact Us</Card.Title>
                            <Card.Text>
                                Dhaka, Gulshan 1212, Bangladesh <br />
                                info@dentalcare.com <br />
                                +880 199 999 888 <br />
                                +880 199 999 888
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="border-0">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faAddressBook} className="contact-icon text-primary" />
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
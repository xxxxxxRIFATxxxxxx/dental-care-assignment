import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
import servicesData from '../ServiceDetails/servicesData';

const Service = props => {
    const services = useServices();
    const { showAll } = props;
    const finalServices = showAll ? services : services.slice(0, 8);

    if (services.length === 0) {
        return (
            <Container className="py-5 mt-5">
                <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Service</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        servicesData.map(service => <SingleService key={service.id} service={service} showFull={false}></SingleService>)
                    }
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Service</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    finalServices.map(service => <SingleService key={service.id} service={service} showFull={false}></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default Service;
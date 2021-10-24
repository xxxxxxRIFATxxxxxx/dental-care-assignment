import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import SingleService from '../SingleService/SingleService';
import servicesData from './servicesData';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useServices();
    const findService = services.find(service => service.id.toString() === id);

    if (!findService) {
        const newFindService = servicesData.find(service => service.id.toString() === id);

        return (
            <Container className="py-5 mt-5">
                <Row xs={1}>
                    <SingleService service={newFindService} showFull={true}></SingleService>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <Row xs={1}>
                <SingleService service={findService} showFull={true}></SingleService>
            </Row>
        </Container>
    );
};

export default ServiceDetails;
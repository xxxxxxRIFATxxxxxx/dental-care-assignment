import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import useDoctors from '../../hooks/useDoctors';
import doctorsData from './doctorsData';

const ServiceDetails = () => {
    const { id } = useParams();
    const doctors = useDoctors();
    const findDoctor = doctors.find(doctor => doctor.id.toString() === id);

    if (!findDoctor) {
        const newFindDoctor = doctorsData.find(doctor => doctor.id.toString() === id);

        return (
            <Container className="py-5 mt-5">
                <Row xs={1}>
                    <SingleDoctor oneDoctor={newFindDoctor} showFull={true}></SingleDoctor>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <Row xs={1}>
                <SingleDoctor oneDoctor={findDoctor} showFull={true}></SingleDoctor>
            </Row>
        </Container>
    );
};

export default ServiceDetails;
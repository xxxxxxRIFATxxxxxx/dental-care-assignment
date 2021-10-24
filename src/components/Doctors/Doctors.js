import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import doctorsData from '../DoctorDetails/doctorsData';

const Doctors = () => {
    const doctors = useDoctors();

    if (doctors.length === 0) {
        return (
            <Container className="py-5 mt-5">
                <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Doctors</h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        doctorsData.map(doctor => <SingleDoctor key={doctor.id} oneDoctor={doctor} showFull={false}></SingleDoctor>)
                    }
                </Row>
            </Container>
        )
    }

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">Our Doctors</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    doctors.map(doctor => <SingleDoctor key={doctor.id} oneDoctor={doctor} showFull={false}></SingleDoctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;
import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import PatientReviews from '../PatientReviews/PatientReviews';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Container>
                <Banner></Banner>
                <Service showAll={false}></Service>
                <PatientReviews showAll={false}></PatientReviews>
            </Container>
        </div>
    );
};

export default Home;
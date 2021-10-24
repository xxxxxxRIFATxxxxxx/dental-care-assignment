import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';
import slider4 from '../../images/slider-4.jpg';
import slider5 from '../../images/slider-5.jpg';
import slider6 from '../../images/slider-6.jpg';

const Slider = () => {
    return (
        <Carousel>
            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
            </Carousel.Item>

            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
            </Carousel.Item>

            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>

            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                />
            </Carousel.Item>

            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="Third slide"
                />
            </Carousel.Item>

            {/* Slide Picture Item */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider6}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
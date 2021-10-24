import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import reviewsData from '../ReviewDetails/reviewsData';

const PatientReviews = props => {
    const reviews = useReviews();
    const { showAll } = props;
    const finalReviews = showAll ? reviews : reviews.slice(0, 4);

    if (reviews.length === 0) {
        return (
            <Container className="py-5 mt-5">
                <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">
                    Patient Reviews
                </h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        reviewsData.map(review => <SingleReview key={review.id} review={review} showFull={false}></SingleReview>)
                    }
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-5 text-primary fw-bold">
                Patient Reviews
            </h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    finalReviews.map(review => <SingleReview key={review.id} review={review} showFull={false}></SingleReview>)
                }
            </Row>
        </Container>
    );
};

export default PatientReviews;
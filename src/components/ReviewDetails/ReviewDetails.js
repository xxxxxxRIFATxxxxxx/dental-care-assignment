import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import reviewsData from './reviewsData';

const ReviewDetails = () => {
    const { id } = useParams();
    const reviews = useReviews();
    const findReviews = reviews.find(review => review.id.toString() === id);

    if (!findReviews) {
        const newFindReviews = reviewsData.find(review => review.id.toString() === id);
        return (
            <Container className="py-5 mt-5">
                <Row xs={1}>
                    <SingleReview review={newFindReviews} showFull={true}></SingleReview>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <Row xs={1}>
                <SingleReview review={findReviews} showFull={true}></SingleReview>
            </Row>
        </Container>
    );
};

export default ReviewDetails;
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ReviewsContext = createContext([]);

const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("./reviews.json")
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <ReviewsContext.Provider value={reviews}>
            {children}
        </ReviewsContext.Provider>
    );
};

export default ReviewProvider;
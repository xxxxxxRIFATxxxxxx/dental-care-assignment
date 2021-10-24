import { useContext } from "react";
import { ReviewsContext } from "../context/ReviewProvider";

const useReviews = () => {
    return useContext(ReviewsContext);
};

export default useReviews;
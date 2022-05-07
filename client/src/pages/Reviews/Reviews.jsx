import { ReviewForm } from "./components/ReviewsForm";
import { ReviewsList } from "./components/ReviewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/reducers/reviewsSlice";
import { useEffect, useState } from "react";
import { ListEmpty } from "../../components/ListEmpty/ListEmpty";
import { Loader } from "../../components/UI/Loader/Loader";

export const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews.reviews)

    useEffect(() => {
        if (reviews.length === 0) {
            setIsLoading(true);
            dispatch(fetchReviews(0));
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }, [dispatch, reviews.length])

    return (
        <div className="block">
            <div className="container">
                {
                    isLoading && <Loader />
                }
                <h1 className="block__title">ОТЗЫВЫ</h1>
                <ReviewForm />
                <hr />
                <ReviewsList />
            </div>
        </div>
    );
}
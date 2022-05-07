import { AdminNewsList } from "./AdminNews/AdminNewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/reducers/reviewsSlice";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { AdminReviewsList } from "./AdminReviews/AdminReviewsList";

export const AdminReviews = () =>{
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews.reviews);

    useEffect(() => {
        if(reviews.length === 0) {
            dispatch(fetchReviews(0))
        }
    }, [dispatch, reviews.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список отзывов</h3>
                </div>
                <AdminReviewsList/>
            </div>
        </div>
    );
}
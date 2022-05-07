import ReviewsImg from "../../../assets/Reviews/reviewsimg.png"
import { formatDate } from "../../../assets/js/functions";

export const ReviewsItem = (props) => {
    return (
        <div className="reviews__item" key={props.review.id}>
            <img src={ReviewsImg} alt="" className="reviews__img" />

            <div className="reviews__content">
                <div className="reviews__header">
                    <h3 className="reviews__title">{props.review.fio}</h3>
                    <h3 className="reviews__title">{formatDate(props.review.date)}</h3>
                </div>
                <p className="reviews__text">{props.review.text}</p>
            </div>
        </div>
    );
}
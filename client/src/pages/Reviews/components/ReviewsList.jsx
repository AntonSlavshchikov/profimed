import { ReviewsItem } from "./ReviewsItem";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchReviews } from "../../../store/reducers/reviewsSlice";
import { MyButton } from "../../../components/UI/Button/MyButton";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty";

export const ReviewsList = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const [count, setCount] = useState(5);

  const dispatch = useDispatch();

  const getReviews = () => {
    setCount(count + 5);
    dispatch(fetchReviews(count));
  };

  return (
    <div className="review__list">
      {reviews.length !== 0 ? (
        reviews.map((item) => <ReviewsItem key={item.id} review={item} />)
      ) : (
        <ListEmpty />
      )}
      {reviews.length > 5 && (
        <div className="news__btn">
          <MyButton onClick={() => getReviews()}>Загрузить еще</MyButton>{" "}
        </div>
      )}
    </div>
  );
};

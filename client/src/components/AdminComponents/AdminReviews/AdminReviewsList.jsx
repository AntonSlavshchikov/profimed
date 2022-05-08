import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { fetchReviews, removeReview } from "../../../store/reducers/reviewsSlice";
import { reviewDelete } from "../../../http/reviewsAPI";
import { useNavigate } from "react-router-dom";

export const AdminReviewsList = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  const [count, setCount] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getReviews = () => {
    setCount(count + 5);
    dispatch(fetchReviews(count));
  };

  const deleteReview = (id) => {
    reviewDelete(id);
    dispatch(removeReview(id));
  };

  return (
    <div className="admin__list">
      {reviews.map((item) => (
        <div className="admin__item" key={item.id}>
          <h6 className="admin__title">
            {" "}
            {item.id}.{item.fio}
          </h6>
          <div className="admin__group">
            <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>
              Изменить
            </button>
            <button className="admin__btn" onClick={() => deleteReview(item.id)}>
              Удалить
            </button>
          </div>
        </div>
      ))}
      {reviews.length > 4 && <AdminButton onClick={() => getReviews()}>Загрузить еще</AdminButton>}
    </div>
  );
};

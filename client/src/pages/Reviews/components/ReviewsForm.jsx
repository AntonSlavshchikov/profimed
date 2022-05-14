import { MyInput } from "../../../components/UI/Input/MyInput";
import { MyButton } from "../../../components/UI/Button/MyButton";
import { createReview } from "../../../http/reviewsAPI";

import { useState } from "react";
import { useDispatch } from "react-redux";

export const ReviewForm = () => {
  const [titleReview, setTitleReview] = useState("");
  const [textReview, setTextReview] = useState("");

  const openForm = () => {
    document.getElementById("reviewForm").classList.toggle("review__form-active");
    document.getElementById("reviewBtn").classList.toggle("review-btn");
  };

  const newReview = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fio", titleReview);
    formData.append("text", textReview);
    formData.append("date", new Date());
    createReview(formData).then(() => {
      window.location.reload(true);
    });
  };

  return (
    <div className="write__review">
      <MyButton onClick={openForm} id="reviewBtn">
        Написать отзыв
      </MyButton>
      <form className="review__form" id="reviewForm" onSubmit={(e) => newReview(e)}>
        <MyInput
          placeholder="ФИО"
          value={titleReview}
          onChange={(e) => setTitleReview(e.target.value)}
          required
        />
        <MyInput
          placeholder="Отзыв"
          value={textReview}
          onChange={(e) => setTextReview(e.target.value)}
          required
        />
        <MyButton type="submit">Отправить</MyButton>
      </form>
    </div>
  );
};

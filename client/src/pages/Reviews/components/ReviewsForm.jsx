import { MyInput } from "../../../components/UI/Input/MyInput";
import { MyButton } from "../../../components/UI/Button/MyButton";
import { createReview } from "../../../http/reviewsAPI";

import { useState } from "react";

export const ReviewForm = () => {
  const [titleReview, setTitleReview] = useState("");
  const [textReview, setTextReview] = useState("");

  const openForm = () => {
    document.getElementById("reviewForm").classList.toggle("review__form-active");
    document.getElementById("reviewBtn").classList.toggle("review-btn");
  };

  const newReview = () => {
    const formData = new FormData();
    formData.append("fio", titleReview);
    formData.append("text", textReview);
    formData.append("date", new Date());
    createReview(formData);
  };

  return (
    <div className="write__review">
      <MyButton onClick={openForm} id="reviewBtn">
        Написать отзыв
      </MyButton>
      <form className="review__form" id="reviewForm" onSubmit={newReview}>
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

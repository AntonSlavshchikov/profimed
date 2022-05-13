import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editVacancy, vacancyGetById } from "../../../http/vacancyAPI";
import { loaderPage } from "../../../store/reducers/userSlice";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";

export const AdminVacancyEdit = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [text, setText] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  const updateVacancy = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();

    formData.append("id", id);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("text", text);

    editVacancy(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
    });
  };

  useEffect(() => {
    const responce = vacancyGetById(params.id);
    responce.then((data) => {
      setId(data.data.id);
      setTitle(data.data.title);
      setPrice(data.data.price);
      setText(data.data.text);
    });
  }, [params.id]);

  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить вакансию</h3>
        </div>
        <form action="" onSubmit={(e) => updateVacancy(e)}>
          <AdminInput
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <AdminInput
            type="number"
            placeholder="Заработная плата"
            style={{ width: "20%" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <AdminTextArea
            rows="10"
            placeholder="Текст вакансии"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

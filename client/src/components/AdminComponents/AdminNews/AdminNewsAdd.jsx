import { useState } from "react";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { createNews } from "../../../http/newsAPI";
import { useDispatch } from "react-redux";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminNewsAdd = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  const newNews = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);
    formData.append("text", text);
    formData.append("date", new Date());
    createNews(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
      alert("Новость добавлена!");
    });
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить новость</h3>
        </div>
        <form action="" onSubmit={(e) => newNews(e)}>
          <AdminInput
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <AdminTextArea
            rows="10"
            placeholder="Текст новости"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <label>Изображение для новости: </label>
          <AdminInput
            type="file"
            placeholder="Файл"
            accept=".png, .jpg, .jpeg"
            required
            className="admin__iput-file"
            onChange={selectFile}
          />

          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

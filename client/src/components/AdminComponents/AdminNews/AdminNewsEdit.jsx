import { useState, useEffect } from "react";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { newsGetById, editNews } from "../../../http/newsAPI";
import { useParams } from "react-router-dom";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";

export const AdminNewsEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const params = useParams();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const responce = newsGetById(params.id);
    responce.then((data) => {
      setId(data.data.id);
      setTitle(data.data.title);
      setText(data.data.text);
      setImg(process.env.REACT_APP_API_URL + data.data.image);
    });
  }, [params.id]);

  const updateNews = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    if (file) {
      formData.append("image", file);
    }
    formData.append("text", text);

    editNews(formData).then(() => {
      window.location.reload(true);
      setIsLoading(false);
    });
  };

  return (
    <div className="block-admin">
      {isLoading && <AdminLoader />}
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Изменить новость</h3>
        </div>
        <form action="" onSubmit={(e) => updateNews(e)}>
          <div className="admin__edit">
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
            <img src={img} alt="" className="admin__img" />
            <label className="admin__file-title">Изображение для новости: </label>
            <AdminInput
              type="file"
              placeholder="Файл"
              accept=".png, .jpg, .jpeg"
              className="admin__input-file"
              onChange={selectFile}
            />
          </div>
          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { aboutGetById, updateAbout } from "../../../http/aboutAPI";
import { AdminSelect } from "../../UI/AdminSelect/AdminSelect";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { fetchTypeAbout } from "../../../store/reducers/typeAboutSlice";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminAboutEdit = () => {
  const dispatch = useDispatch();
  const typeAbout = useSelector((state) => state.typeAbout.typeAbout);

  const [id, setId] = useState(0);
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState([]);
  const [fil, setFil] = useState();
  const params = useParams();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const responce = aboutGetById(params.id);
    responce.then((data) => {
      setId(data.data.id);
      setType(data.data.type);
      setTitle(data.data.title);
      setText(data.data.text);
      setFil(data.data.file);
    });
    if (typeAbout.length === 0) {
      dispatch(fetchTypeAbout());
    }
  }, [params.id, dispatch, typeAbout.length]);

  const saveAbout = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("id", id);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    updateAbout(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
    });
  };

  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Изменить</h3>
        </div>
        <form action="" onSubmit={(e) => saveAbout(e)}>
          <AdminSelect value={type} onChange={(e) => setType(e.target.value)} required>
            {typeAbout.map((item) => (
              <option key={item.id} className="admin__option" value={item.id}>
                {item.title}
              </option>
            ))}
          </AdminSelect>
          <AdminInput
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <AdminTextArea
            rows="10"
            placeholder="Текст"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          {fil ? (
            <label>
              Старый документ: {fil}
              <br />
            </label>
          ) : (
            <br />
          )}
          <label>Документ(Если нужен): </label>
          <AdminInput
            type="file"
            placeholder="Файл"
            accept=".doc, .docx"
            className="admin__iput-file"
            onChange={selectFile}
          />

          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

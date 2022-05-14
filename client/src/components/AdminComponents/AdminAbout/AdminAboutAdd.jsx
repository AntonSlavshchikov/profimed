import { useEffect, useState } from "react";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { createAbout } from "../../../http/aboutAPI";
import { useSelector, useDispatch } from "react-redux";
import { fetchTypeAbout } from "../../../store/reducers/typeAboutSlice";
import { AdminSelect } from "../../UI/AdminSelect/AdminSelect";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminAboutAdd = () => {
  const [selectItem, setSelectItem] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const type = useSelector((state) => state.typeAbout.typeAbout);
  const dispatch = useDispatch();

  const newAbout = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("type", selectItem);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    createAbout(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
      alert("Запись добавлена!");
    });
  };

  useEffect(() => {
    if (type.length === 0) {
      dispatch(fetchTypeAbout());
    }
  }, [type.length, dispatch]);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить</h3>
        </div>
        <form action="" onSubmit={(e) => newAbout(e)}>
          <AdminSelect value={selectItem} onChange={(e) => setSelectItem(e.target.value)} required>
            {type.map((item) => (
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
            placeholder="Текст новости"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
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

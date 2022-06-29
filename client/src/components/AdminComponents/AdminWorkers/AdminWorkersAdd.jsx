import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { useState } from "react";
import { createWorker } from "../../../http/workersAPI";
import { useDispatch } from "react-redux";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminWorkersAdd = () => {
  const [fio, setFIO] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [exp, setExp] = useState("");
  const [progress, setProgress] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const newWorker = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();

    formData.append("fio", fio);
    formData.append("image", file);
    formData.append("birthday", date);
    formData.append("status", status);
    formData.append("experience", exp);
    formData.append("progress", progress);
    formData.append("biography", text);

    createWorker(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
      alert("Запись добавлена!");
    });
  };
  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить сотрудника</h3>
        </div>
        <form action="" onSubmit={(e) => newWorker(e)}>
          <AdminInput
            type="text"
            placeholder="ФИО"
            value={fio}
            onChange={(e) => setFIO(e.target.value)}
            required
          />
          <AdminInput
            type="date"
            placeholder="Дата рождения"
            style={{ width: "20%" }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <AdminInput
            type="text"
            placeholder="Должность"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
          <AdminInput
            type="number"
            placeholder="Стаж"
            style={{ width: "20%" }}
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            required
          />
          <AdminInput
            type="text"
            placeholder="Заслуги *Необязательное поле"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
          <AdminTextArea
            rows="10"
            placeholder="Биография *Необязательное поле"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label for="file">Изображение сотрудника: </label>
          <AdminInput
            type="file"
            name="file"
            placeholder="Фото сотрудника"
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

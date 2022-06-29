import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminTextArea } from "../../UI/AdminTextArea/AdminTextArea";
import { useState, useEffect } from "react";
import { workersGetById, updateWorker } from "../../../http/workersAPI";
import { useParams } from "react-router-dom";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";
import { loaderPage } from "../../../store/reducers/userSlice";
import { useDispatch } from "react-redux";

export const AdminWorkersEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [id, setID] = useState(0);
  const [fio, setFIO] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [exp, setExp] = useState("");
  const [progress, setProgress] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState([]);
  const [img, setImg] = useState();
  const dispatch = useDispatch();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  // Формат даты
  function formatDate(date) {
    var res = new Date(date);
    var dd = res.getDate();
    if (dd < 10) dd = "0" + dd;
    var mm = res.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    var yy = res.getFullYear();
    return `${yy}-${mm}-${dd}`;
  }

  useEffect(() => {
    const responce = workersGetById(params.id);
    responce.then((data) => {
      setID(data.data.id);
      setFIO(data.data.fio);
      setDate(formatDate(data.data.birthday));
      setStatus(data.data.status);
      setExp(data.data.experience);
      setProgress(data.data.progress);
      setText(data.data.biography);
      setImg(process.env.REACT_APP_API_URL + data.data.image);
    });
  }, [params.id]);

  const editWorker = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();

    formData.append("id", id);
    formData.append("fio", fio);
    if (file) {
      formData.append("image", file);
    }
    formData.append("birthday", date);
    formData.append("status", status);
    formData.append("experience", exp);
    formData.append("progress", progress);
    formData.append("biography", text);

    updateWorker(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
    });
  };

  return (
    <div className="block-admin">
      {isLoading && <AdminLoader />}
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Изменить сотрудника</h3>
        </div>
        <form action="" onSubmit={(e) => editWorker(e)}>
          <div className="admin__edit">
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
              placeholder="Заслуги"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              required
            />
            <AdminTextArea
              rows="10"
              placeholder="Биография"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <img src={img} alt="" className="admin__img" />
            <label>Изображение сотрудника: </label>
            <AdminInput
              type="file"
              name="file"
              placeholder="Фото сотрудника"
              accept=".png, .jpg, .jpeg"
              className="admin__iput-file"
              onChange={selectFile}
            />
          </div>
          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

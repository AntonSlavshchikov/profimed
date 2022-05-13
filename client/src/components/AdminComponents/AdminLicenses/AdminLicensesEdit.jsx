import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { useState, useEffect } from "react";
import { licensesGetById, updateLicenses } from "../../../http/licensesAPI";
import { useParams } from "react-router-dom";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";
import { loaderPage } from "../../../store/reducers/userSlice";
import { useDispatch } from "react-redux";

export const AdminLicensesEdit = () => {
  const params = useParams();
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const responce = licensesGetById(params.id);
    responce.then((data) => {
      setID(data.data.id);
      setTitle(data.data.title);
      setImg(process.env.REACT_APP_API_URL + data.data.image);
    });
  }, [params.id]);

  const editLicenses = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();

    formData.append("id", id);
    formData.append("title", title);
    if (file) {
      formData.append("image", file);
    }

    updateLicenses(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
    });
  };

  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Изменить лицензию</h3>
        </div>
        <form action="" onSubmit={(e) => editLicenses(e)}>
          <div className="admin__edit">
            <AdminInput
              type="text"
              placeholder="Наименование"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <img src={img} alt="" className="admin__img" />
            <label>Лицензия(картинка): </label>
            <AdminInput
              type="file"
              name="file"
              placeholder="Лицензия"
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

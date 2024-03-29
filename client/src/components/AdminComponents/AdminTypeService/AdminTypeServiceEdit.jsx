import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { typeServicesGetById, updateTypeServices } from "../../../http/typeServicesAPI";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";
import { useDispatch } from "react-redux";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminTypeServiceEdit = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const responce = typeServicesGetById(params.id);
    responce.then((data) => {
      setId(data.data.id);
      setTitle(data.data.title);
    });
  }, [params.id]);

  const saveTypeService = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    console.log(formData);
    updateTypeServices(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
    });
  };

  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Изменить тип услуги</h3>
        </div>
        <form action="" onSubmit={(e) => saveTypeService(e)}>
          <AdminInput
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <AdminButton type="submit">Сохранить</AdminButton>
        </form>
      </div>
    </div>
  );
};

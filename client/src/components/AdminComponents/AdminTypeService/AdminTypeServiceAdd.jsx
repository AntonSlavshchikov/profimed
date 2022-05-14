import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTypeServices } from "../../../http/typeServicesAPI";
import { loaderPage } from "../../../store/reducers/userSlice";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";

export const AdminTypeServicesAdd = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const newTypeServices = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("title", title);

    createTypeServices(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
      alert("Запись добавлена!");
    });
  };
  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить тип услуги</h3>
        </div>
        <form action="" onSubmit={(e) => newTypeServices(e)}>
          <AdminInput
            type="text"
            placeholder="Наименование типа услуги"
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

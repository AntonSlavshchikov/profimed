import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { useState } from "react";
import { createTypeAbout } from "../../../http/typeAboutAPI";
import { useDispatch } from "react-redux";
import { loaderPage } from "../../../store/reducers/userSlice";

export const AdminTypeAboutAdd = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const newTypeAbout = (e) => {
    e.preventDefault();
    dispatch(loaderPage(true));
    const formData = new FormData();
    formData.append("title", title);

    createTypeAbout(formData).then(() => {
      window.location.reload(true);
      dispatch(loaderPage(false));
      alert("Запись добавлена!");
    });
  };
  return (
    <div className="block-admin">
      <div className="container">
        <div className="block__header">
          <h3 className="block-admin__title">Добавить тип "О нас"</h3>
        </div>
        <form action="" onSubmit={(e) => newTypeAbout(e)}>
          <AdminInput
            type="text"
            placeholder="Наименование типа"
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

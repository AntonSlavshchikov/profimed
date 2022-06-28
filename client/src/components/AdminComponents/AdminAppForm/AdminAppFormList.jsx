import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appFormDelete } from "../../../http/appFormAPI";
import { removeAppForm } from "../../../store/reducers/appFormSlice";
import { MyInput } from "../../UI/Input/MyInput";

export const AdminAppFormList = () => {
  const appForm = useSelector((state) => state.appForm.appForm);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const deleteAppForm = (id) => {
    appFormDelete(id);
    dispatch(removeAppForm(id));
  };

  //   const onChecked = (item) => {
  //     console.log(item);
  //   };

  return (
    <div className="admin__list">
      {appForm.map((item) => (
        <div className="admin__item" key={item.id}>
          <h6 className="admin__title">
            {" "}
            {item.id}.{item.fio} - {item.numberPhone}. Желаемый врач: {item.doctor}
          </h6>
          {/* <MyInput
            type="checkbox"
            style={{ height: "20px" }}
            checked={item.mark}
            onChecked={onChecked(item)}
          /> */}
          <div className="admin__group">
            <button className="admin__btn" onClick={() => deleteAppForm(item.id)}>
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

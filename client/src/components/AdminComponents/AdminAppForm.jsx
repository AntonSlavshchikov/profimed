import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppForm } from "../../store/reducers/appFormSlice";
import { AdminAppFormList } from "./AdminAppForm/AdminAppFormList";

export const AdminAppForm = () => {
  const dispatch = useDispatch();
  const appForm = useSelector((state) => state.appForm.appForm);

  useEffect(() => {
    if (appForm.length === 0) {
      dispatch(fetchAppForm());
    }
  }, [dispatch, appForm.length]);

  return (
    <div className="block-admin">
      <div className="container">
        <div className="block-admin__header">
          <h3 className="block-admin__title">Список заявок</h3>
        </div>
        <AdminAppFormList />
      </div>
    </div>
  );
};

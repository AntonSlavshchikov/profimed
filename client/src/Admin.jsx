import { AdminContent } from "./components/AdminContent/AdminContent";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "./components/NotFound/NotFound";
import { loaderPage, setUser } from "./store/reducers/userSlice";
import { useEffect } from "react";
import { check } from "./http/userAPI";
import { AdminLoader } from "./components/UI/AdminLoader/AdminLoader";

const Admin = () => {
  const user = useSelector((state) => state.user.user);
  const loadingPage = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderPage(true));
    check()
      .then((data) => {
        dispatch(setUser(true));
        dispatch(loaderPage(false));
      })
      .finally(() => {
        dispatch(loaderPage(false));
      });
  }, []);

  return (
    <section className="page">
      {loadingPage && <AdminLoader />}
      {user ? <AdminContent /> : <NotFound />}
    </section>
  );
};

export default Admin;

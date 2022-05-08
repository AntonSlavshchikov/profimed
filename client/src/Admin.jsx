import { AdminContent } from "./components/AdminContent/AdminContent";
import { HeaderAdmin } from "./components/Header/HeaderAdmin";
import { Panelbar } from "./components/Panelbar/Panelbar";
import { useDispatch, useSelector } from "react-redux";
import { ListEmpty } from "./components/ListEmpty/ListEmpty";
import { NotFound } from "./components/NotFound/NotFound";
import { setUser } from "./store/reducers/userSlice";
import { useEffect } from "react";
import { check } from "./http/userAPI";

const Admin = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    check().then((data) => {
      dispatch(setUser(true));
    });

    /* if (JSON.parse(window.localStorage.getItem("user")) === true) {
      dispatch(setUser(JSON.parse(window.localStorage.getItem("user"))));
    } */
  }, []);

  /*   useEffect(() => {
    if (user === true) {
      window.localStorage.setItem("user", user);
    }
  }, [user]); */

  return <section className="page">{user ? <AdminContent /> : <NotFound />}</section>;
};

export default Admin;

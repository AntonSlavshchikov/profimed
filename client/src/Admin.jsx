import { AdminContent } from "./components/AdminContent/AdminContent";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "./components/NotFound/NotFound";
import { setUser } from "./store/reducers/userSlice";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { AdminLoader } from "./components/UI/AdminLoader/AdminLoader";

const Admin = () => {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    check()
      .then((data) => {
        dispatch(setUser(true));
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="page">
      {isLoading ? <AdminLoader /> : user ? <AdminContent /> : <NotFound />}
    </section>
  );
};

export default Admin;

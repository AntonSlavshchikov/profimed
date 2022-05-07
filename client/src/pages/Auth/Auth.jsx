import { AdminInput } from "../../components/UI/AdminInput/AdminInput";
import { AdminButton } from "../../components/UI/AdminButton/AdminButton";
import { useEffect, useState } from "react";
import { login, check } from "../../http/userAPI";
import { useNavigate } from "react-router-dom";
import { setUser, setIsAuth } from "../../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    check().then((data) => {
      console.log(data);
    });

    if (JSON.parse(window.localStorage.getItem("user")) === true) {
      navigate("/admin");
    }
  }, []);

  const signIn = async () => {
    try {
      const data = await login(username, password);
      navigate("/admin");
      dispatch(setUser(true));
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth__window">
        <h3 className="login__header">Авторизация</h3>
        <form action="" className="login__form" onSubmit={signIn}>
          <AdminInput
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <AdminInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
        <AdminButton onClick={signIn}>Войти</AdminButton>
      </div>
    </div>
  );
};

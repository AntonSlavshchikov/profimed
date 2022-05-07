import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/reducers/userSlice";

export const HeaderAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(setUser(false));
        navigate("/login");
        window.localStorage.setItem('user', false);
    }
    return (
        <header className="header__admin">
            <div className="header__admin-nav">
                <h3 className="header__admin-title">Администрирование "ПРОФИМЕД"</h3>
                <a href="" className="header__admin-link" onClick={() => logout()}>Добро пожаловать, АДМИН!</a>
            </div>
        </header>
    );
}
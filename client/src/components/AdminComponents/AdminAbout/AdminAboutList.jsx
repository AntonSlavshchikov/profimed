import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAbout } from "../../../store/reducers/aboutSlice";
import { aboutDelete } from "../../../http/aboutAPI";


export const AdminAboutList = () => {
    const about = useSelector(state => state.about.about);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteAbout = (id) => {
        aboutDelete(id);
        dispatch(removeAbout(id));
    }

    return (
        <div className="admin__list">
            {about.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteAbout(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { typeAboutDelete } from "../../../http/typeAboutAPI";
import { removeTypeAbout } from "../../../store/reducers/typeAboutSlice";


export const AdminTypeAboutList = () => {
    const typeAbout = useSelector(state => state.typeAbout.typeAbout);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteTypeAbout = (id) => {
        typeAboutDelete(id);
        dispatch(removeTypeAbout(id));
    }

    return (
        <div className="admin__list">
            {typeAbout.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>,
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteTypeAbout(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
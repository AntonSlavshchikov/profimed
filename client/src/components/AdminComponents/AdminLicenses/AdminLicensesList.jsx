import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeLicenses } from "../../../store/reducers/licensesSlice";
import { licensesDelete } from "../../../http/licensesAPI";


export const AdminLicensesList = () => {
    const licenses = useSelector(state => state.licenses.licenses);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteLicenses = (id) => {
        licensesDelete(id);
        dispatch(removeLicenses(id));
    }

    return (
        <div className="admin__list">
            {licenses.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteLicenses(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
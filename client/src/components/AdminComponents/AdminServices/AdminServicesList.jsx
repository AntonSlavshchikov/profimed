import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { servicesDelete } from "../../../http/servicesAPI";
import { removeServices } from "../../../store/reducers/servicesSlice";

export const AdminServicesList = () => {
    const services = useSelector(state => state.services.services);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteServices = (id) => {
        servicesDelete(id);
        dispatch(removeServices(id));
    }

    return (
        <div className="admin__list">
            {services.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>,
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteServices(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
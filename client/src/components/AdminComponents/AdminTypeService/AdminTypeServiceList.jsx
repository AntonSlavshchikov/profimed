import { useSelector, useDispatch } from "react-redux";
import { removeTypeServices } from "../../../store/reducers/typeServicesSlice";
import { typeServicesDelete } from "../../../http/typeServicesAPI";
import { useNavigate } from "react-router-dom";

export const AdminTypeServicesList = () => {
    const typeServices = useSelector(state => state.typeServices.typeServices);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const deleteTypeServices = (id) => {
        typeServicesDelete(id);
        dispatch(removeTypeServices(id));
    }

    return (
        <div className="admin__list">
            {typeServices.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>,
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteTypeServices(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
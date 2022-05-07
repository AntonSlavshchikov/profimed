import { useSelector, useDispatch } from "react-redux";
import { removeVacancy } from "../../../store/reducers/vacancySlice";
import { vacancyDelete } from "../../../http/vacancyAPI";
import { useNavigate } from "react-router-dom";

export const AdminVacancyList = () => {
    const vacancy = useSelector(state => state.vacancy.vacancy);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteVacancy= (id) => {
        vacancyDelete(id);
        dispatch(removeVacancy(id));
    }

    return (
        <div className="admin__list">
            {vacancy.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title">{item.id}. {item.title}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteVacancy(item.id)}>Удалить</button>
                    </div>
                </div>
            )}

        </div>
    );
}
import { AdminVacancyList } from "./AdminVacancy/AdminVacancyList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancy } from "../../store/reducers/vacancySlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AdminVacancy = () => {
    const vacancy = useSelector(state => state.vacancy.vacancy);
    const dispatch = useDispatch()

    useEffect(() => {
        if (vacancy.length === 0) {
            dispatch(fetchVacancy())
        }
    }, [dispatch, vacancy.length])

    return (
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список Вакансий</h3>
                    <Link to="admin_vacancy_add" className="block-admin__link">+Добавить вакансию</Link>
                </div>
                <AdminVacancyList />
            </div>
        </div>
    );
}
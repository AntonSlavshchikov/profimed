import { AdminNewsList } from "./AdminNews/AdminNewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../store/reducers/workersSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminWorkersList } from "./AdminWorkers/AdminWorkersList";


export const AdminWorkers = () => {

    const dispatch = useDispatch();
    const workers = useSelector(state => state.workers.workers);

    useEffect(() => {
        if (workers.length === 0) {
            dispatch(fetchWorkers())
        }
    }, [dispatch, workers.length])

    return (
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список Сотрудников</h3>
                    <Link to="admin_worker_add" className="block-admin__link">+Добавить сотрудника</Link>
                </div>

                <AdminWorkersList/>
            </div>
        </div>
    );
}
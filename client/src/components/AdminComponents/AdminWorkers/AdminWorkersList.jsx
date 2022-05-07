import { useSelector, useDispatch } from "react-redux";
import { removeWorker } from "../../../store/reducers/workersSlice";
import { workerDelete } from "../../../http/workersAPI";
import { useNavigate } from "react-router-dom";

export const AdminWorkersList = () => {
    const workers = useSelector(state => state.workers.workers);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const deleteWorkers = (id) => {
        workerDelete(id);
        dispatch(removeWorker(id));
    }

    return (
        <div className="admin__list">
            {workers.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.fio}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteWorkers(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
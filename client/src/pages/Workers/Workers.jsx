import { WorkersList } from "./components/WorkersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../store/reducers/workersSlice";
import { useEffect, useState } from "react";
import { ListEmpty } from "../../components/ListEmpty/ListEmpty";
import { Loader } from "../../components/UI/Loader/Loader";


export const Workers = () => {
    const dispatch = useDispatch();
    const workers = useSelector(state => state.workers.workers)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (workers.length === 0) {
            setIsLoading(true);
            dispatch(fetchWorkers())
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }, [dispatch, workers.length]);

    return (
        <div className="block">
            <div className="container">
                <h1 className="block__title">Специалисты</h1>
                {
                    isLoading && <Loader />
                }
                <WorkersList />
            </div>
        </div>
    );
}
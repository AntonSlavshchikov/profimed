import { useEffect, useState } from "react";
import {workersGetById} from "../../http/workersAPI";
import { useParams } from 'react-router-dom';
import { formatDate } from "../../assets/js/functions"
import { Loader } from "../../components/UI/Loader/Loader";

export const WorkerInfo = () => {
    const params = useParams();
    const [worker, setWorker] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const declension = ['год', 'года', 'лет'];

    const plural = (number, titles) => {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    useEffect(() => {
        setIsLoading(true);
        const response = workersGetById(params.id);
        response.then(data => setWorker(data.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    },[params.id])

    return(
        <div className="block">
            <div className="container">
                {
                    isLoading && <Loader/>
                }
                <h3 className="block__title">{worker.fio}</h3>
                <img className="worker-info__img" src={process.env.REACT_APP_API_URL + worker.image} alt=""/>
                <p className="worker-info__title">Дата рождения: <span className="worker-info__data">{formatDate(worker.birthday)} г.</span></p>
                <p className="worker-info__title">Должность: <span className="worker-info__data">{worker.status}</span></p>
                <p className="worker-info__title">Стаж: <span className="worker-info__data">{worker.experience} {plural(worker.experience, declension)}</span></p>
                <p className="worker-info__title">Заслуги: <span className="worker-info__data">{worker.progress}</span></p>
                <p className="worker-info__title">{worker.biography}</p>
            </div>
        </div>
    );
}
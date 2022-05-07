import { VacancyList } from "./components/VacancyList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVacancy } from "../../store/reducers/vacancySlice";
import { useEffect, useState } from "react";
import { ListEmpty } from "../../components/ListEmpty/ListEmpty";
import { Loader } from "../../components/UI/Loader/Loader";

export const Vacancy = () => {
    const vacancy = useSelector((state) => state.vacancy.vacancy)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (vacancy.length === 0) {
            setIsLoading(true);
            dispatch(fetchVacancy());
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }, [dispatch, vacancy.length]);

    return (
        <div className="block">
            <div className="container">
                <h1 className="block__title">Вакансии</h1>
                {
                    isLoading && <Loader />
                }
                <VacancyList />
            </div>
        </div>
    );
}
import { VacancyItem } from "./VacancyItem";
import { useSelector } from "react-redux";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty";

export const VacancyList = () => {
    const vacancy = useSelector((state) => state.vacancy.vacancy)

    return (
        <div className="vacancy__list">
            {
                vacancy.length !== 0
                    ? vacancy.map((item) =>
                        <VacancyItem key={item.id} vacancy={item} />
                    )
                    : <ListEmpty />
            }

        </div>
    );
}
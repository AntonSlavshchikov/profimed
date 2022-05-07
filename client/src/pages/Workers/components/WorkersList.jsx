import { WorkersItem } from "./WorkersItem";
import { useSelector } from "react-redux";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty";

export const WorkersList = () => {
    const workers = useSelector(state => state.workers.workers);
    const status = useSelector(state => state.workers.status);

    return (
        <div className="workers">
            {
                workers.length !== 0
                    ? workers.map((item) =>
                        <WorkersItem key={item.id} workers={item} />
                    )
                    : <ListEmpty />
            }
        </div>
    );
}
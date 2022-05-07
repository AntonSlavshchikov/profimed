import { DocumentItem } from "./DocumentItem";
import { useSelector } from "react-redux";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty";

export const DocumentList = () => {
    const documents = useSelector(state => state.documents.documents);

    return (
        <div className="document__list">
            {
                documents.length !== 0
                    ? documents.map((item) =>
                        <DocumentItem key={item.id} document={item} />
                    )
                    : <ListEmpty />
            }
        </div>
    );
}
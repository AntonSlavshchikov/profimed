import { Loader } from "../../components/UI/Loader/Loader";
import { useEffect, useState } from "react";
import { DocumentList } from "./components/DocumentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../../store/reducers/documentsSlice";

export const Documents = () => {
    const [isLoading, setIsLoading] = useState(false);
    const documents = useSelector(state => state.documents.documents)
    const dispatch = useDispatch();

    useEffect(() => {
        if (documents.length === 0) {
            setIsLoading(true);
            dispatch(fetchDocuments());
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }, [documents.length, dispatch]);

    return (
        <div className="block">
            <div className="container">
                <h1 className="block__title">Документы</h1>
                {
                    isLoading && <Loader />
                }
                <DocumentList />
            </div>
        </div>
    );
}
import { AdminDocumentsList } from "./AdminDocuments/AdminDocumentsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../../store/reducers/documentsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListEmpty } from "../ListEmpty/ListEmpty";

export const AdminDocuments = () => {
    const dispatch = useDispatch();
    const documents = useSelector(state => state.documents.documents);

    useEffect(() => {
        if (documents.length === 0) {
            dispatch(fetchDocuments());
        }
    }, [dispatch, documents.length])
    return (
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список Документов</h3>
                    <Link to="admin_document_add" className="block-admin__link">+Добавить документ</Link>
                </div>
                {
                    documents.length !== 0
                        ? <AdminDocumentsList />
                        : <ListEmpty />
                }

            </div>
        </div>
    );
}
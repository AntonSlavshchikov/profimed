import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { documentDelete } from "../../../http/documentsAPI";
import { removeDocument } from "../../../store/reducers/documentsSlice";

export const AdminDocumentsList = () => {
    const documents = useSelector(state => state.documents.documents);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeDoc = (id) =>{
        documentDelete(id);
        dispatch(removeDocument(id));
    }
    return (
        <div className="admin__list">
            {documents.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => removeDoc(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
}
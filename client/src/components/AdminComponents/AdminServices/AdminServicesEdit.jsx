import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { serviceGetById, updateService } from "../../../http/servicesAPI"
import { AdminSelect } from "../../UI/AdminSelect/AdminSelect";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { fetchTypeServices } from "../../../store/reducers/typeServicesSlice";
import { AdminLoader } from "../../UI/AdminLoader/AdminLoader";

export const AdminServicesEdit = () => {
    const dispatch = useDispatch();
    const typeServices = useSelector(state => state.typeServices.typeServices)
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState(0);
    const params = useParams();

    useEffect(() => {
        const responce = serviceGetById(params.id);
        responce.then(data => {
            setId(data.data.id);
            setType(data.data.type);
            setTitle(data.data.title);
            setPrice(data.data.price);
        });
        if (typeServices.length === 0) {
            dispatch(fetchTypeServices());
        }
    }, [params.id, dispatch, typeServices.length])

    const saveService = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('id', id);
        formData.append('type', type);
        formData.append('title', title);
        formData.append('price', price);
        updateService(formData).then(() => {
            window.location.reload(true);
            setIsLoading(false);
        });
    }

    return (
        <div className="block-admin">
            {isLoading && <AdminLoader />}
            <div className="container">
                <div className="block__header">
                    <h3 className="block-admin__title">Изменить услугу</h3>
                </div>
                <form action="" onSubmit={(e) => saveService(e)}>
                    <AdminSelect value={type} onChange={(e) => setType(e.target.value)} required>
                        {typeServices.map((item) =>
                            <option key={item.id} className="admin__option" value={item.id}>{item.title}</option>
                        )}
                    </AdminSelect>
                    <AdminInput
                        type="text"
                        placeholder="Наименование"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <AdminInput
                        type="number"
                        placeholder="Наименование"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <AdminButton type="submit">Сохранить</AdminButton>
                </form>
            </div>
        </div>
    );
}
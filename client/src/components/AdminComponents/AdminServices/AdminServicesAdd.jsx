import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { AdminInput } from "../../UI/AdminInput/AdminInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchTypeServices } from '../../../store/reducers/typeServicesSlice';
import { useEffect, useState } from "react";
import { AdminSelect } from "../../UI/AdminSelect/AdminSelect";
import { createService } from "../../../http/servicesAPI";

export const AdminServicesAdd = () => {
    const [selectItem, setSelectItem] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch()
    const type = useSelector(state => state.typeServices.typeServices)
    
    useEffect(() => {
        if(type.length === 0){
            dispatch(fetchTypeServices());
        }
    },[dispatch, type.length])

     const newService = () => {
        const formData = new FormData();
        formData.append('type', selectItem);
        formData.append('title', title);
        formData.append('price', price);
        
        createService(formData);
    }

    return(
        <div className="block-admin">
        <div className="container">
            <div className="block__header">
                <h3 className="block-admin__title">Добавить услугу</h3>
            </div>
            <form action="" onSubmit={newService}>
                <AdminSelect value={selectItem} onChange={(e) => setSelectItem(e.target.value)} required>
                    {type.map((item) =>
                        <option key={item.id} className="admin__option" value={item.id}>{item.title}</option>
                    )}
                </AdminSelect>
                <AdminInput type="text" placeholder="Наименование услуги" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <AdminInput type="number" placeholder="Цена"  value={price} onChange={(e) => setPrice(e.target.value)} required/>
                
                <AdminButton type="submit">Сохранить</AdminButton>
            </form>
        </div>
    </div>
    );
}
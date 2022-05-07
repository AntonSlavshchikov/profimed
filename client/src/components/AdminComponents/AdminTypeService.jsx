import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { fetchTypeServices } from "../../store/reducers/typeServicesSlice";
import { AdminTypeServicesList } from "./AdminTypeService/AdminTypeServiceList";

export const AdminTypeServices = () =>{

    const dispatch = useDispatch();
    const typeServices = useSelector(state => state.typeServices.typeServices);

    useEffect(() => {
        if(typeServices.length === 0) {
            dispatch(fetchTypeServices())
        }
    }, [dispatch, typeServices.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список типов услуг</h3>
                    <Link to="admin_typeservices_add" className="block-admin__link">+Добавить тип услуг</Link>
                </div>
                <AdminTypeServicesList/>
            </div>
        </div>
    );
}
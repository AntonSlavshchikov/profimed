import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../store/reducers/servicesSlice";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { AdminServicesList } from "./AdminServices/AdminServicesList";

export const AdminServices = () =>{
    const dispatch = useDispatch();
    const services = useSelector(state => state.services.services);

    useEffect(() => {
        if(services.length === 0) {
            dispatch(fetchServices())
        }
    }, [dispatch, services.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список услуг</h3>
                    <Link to="admin_services_add" className="block-admin__link">+Добавить услугу</Link>
                </div>
                <AdminServicesList/>
            </div>
        </div>
    );
}
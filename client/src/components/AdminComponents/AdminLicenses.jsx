import { useDispatch, useSelector } from "react-redux";
import { fetchLicenses } from "../../store/reducers/licensesSlice"
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { AdminLicensesList } from "./AdminLicenses/AdminLicensesList";

export const AdminLicenses= () =>{

    const dispatch = useDispatch();
    const licenses = useSelector(state => state.licenses.licenses);

    useEffect(() => {
        if(licenses.length === 0) {
            dispatch(fetchLicenses())
        }
    }, [])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список лицензий</h3>
                    <Link to="admin_licenses_add" className="block-admin__link">+Добавить лицензию</Link>
                </div>
                <AdminLicensesList/>
            </div>
        </div>
    );
}
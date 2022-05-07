import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { fetchTypeAbout } from "../../store/reducers/typeAboutSlice";
import { AdminTypeAboutList } from "./AdminTypeAbout/AdminTypeAboutList";

export const AdminTypeAbout = () =>{

    const dispatch = useDispatch();
    const typeAbout = useSelector(state => state.typeAbout.typeAbout);

    useEffect(() => {
        if(typeAbout.length === 0) {
            dispatch(fetchTypeAbout())
        }
    }, [dispatch, typeAbout.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список типов "О нас"</h3>
                    <Link to="admin_typeabout_add" className="block-admin__link">+Добавить тип</Link>
                </div>
                <AdminTypeAboutList/>
            </div>
        </div>
    );
}
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../store/reducers/aboutSlice";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { AdminAboutList } from "./AdminAbout/AdminAboutList";

export const AdminAbout= () =>{

    const dispatch = useDispatch();
    const about = useSelector(state => state.about.about);

    useEffect(() => {
        if(about.length === 0) {
            dispatch(fetchAbout())
        }
    }, [dispatch, about.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список</h3>
                    <Link to="admin_about_add" className="block-admin__link">+Добавить</Link>
                </div>
                <AdminAboutList/>
            </div>
        </div>
    );
}
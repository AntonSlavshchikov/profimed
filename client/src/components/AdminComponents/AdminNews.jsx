import { AdminNewsList } from "./AdminNews/AdminNewsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/reducers/newsSlice";
import { useEffect } from "react";
import { Link} from "react-router-dom";

export const AdminNews = () =>{

    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        if(news.length === 0) {
            dispatch(fetchNews(0))
        }
    }, [dispatch, news.length])

    return(
        <div className="block-admin">
            <div className="container">
                <div className="block-admin__header">
                    <h3 className="block-admin__title">Список новостей</h3>
                    <Link to="admin_news_add" className="block-admin__link">+Добавить новость</Link>
                </div>
                <AdminNewsList/>
            </div>
        </div>
    );
}
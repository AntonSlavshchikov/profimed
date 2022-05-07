import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { fetchNews, removeNews } from "../../../store/reducers/newsSlice";
import { AdminButton } from "../../UI/AdminButton/AdminButton";
import { newsDelete } from "../../../http/newsAPI";
import { useNavigate } from "react-router-dom";


export const AdminNewsList = () => {
    const news = useSelector(state => state.news.news);
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const getNews = () => {
        setCount(count + 5);
        dispatch(fetchNews(count));
    }

    const deleteNews = (id) => {
        newsDelete(id);
        dispatch(removeNews(id));
    }

    return (
        <div className="admin__list">
            {news.map((item) =>
                <div className="admin__item" key={item.id}>
                    <h6 className="admin__title"> {item.id}.{item.title}</h6>
                    <div className="admin__group">
                        <button className="admin__btn" onClick={() => navigate(`${item.id}`)}>Изменить</button>
                        <button className="admin__btn" onClick={() => deleteNews(item.id)}>Удалить</button>
                    </div>
                </div>
            )}
            {
                news.length > 4 &&  <AdminButton onClick={() => getNews()}>Загрузить еще</AdminButton>
            }
        </div>
    );
}
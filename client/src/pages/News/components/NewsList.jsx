import { MyButton } from "../../../components/UI/Button/MyButton";
import { NewsItem } from "./NewsItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../../store/reducers/newsSlice";
import { useState } from "react";
import { ListEmpty } from "../../../components/ListEmpty/ListEmpty";
import { Loader } from "../../../components/UI/Loader/Loader";

export const NewsList = () => {
  const [count, setCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const news = useSelector((state) => state.news.news);
  const countNews = useSelector((state) => state.news.count);
  const dispatch = useDispatch();

  const getNews = () => {
    if (count <= countNews) {
      if (news.length !== countNews) {
        setIsLoading(true);
        setCount(count + 5);
        dispatch(fetchNews(count));
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="news__list">
      {isLoading && <Loader />}
      {news.length !== 0 ? (
        news.map((item) => <NewsItem key={item.id} news={item} />)
      ) : (
        <ListEmpty />
      )}
      {countNews > 5 && (
        <div className="news__btn">
          <MyButton onClick={() => getNews()}>Загрузить еще</MyButton>{" "}
        </div>
      )}
    </div>
  );
};

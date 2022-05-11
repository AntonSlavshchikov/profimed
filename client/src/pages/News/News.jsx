import { useDispatch, useSelector } from "react-redux";
import { addNewsCount, fetchCountNews, fetchNews } from "../../store/reducers/newsSlice";
import { useEffect, useState } from "react";
import { NewsList } from "./components/NewsList";
import { Loader } from "../../components/UI/Loader/Loader";

export const News = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  useEffect(() => {
    if (news.length === 0) {
      setIsLoading(true);
      dispatch(fetchNews(0));
      dispatch(fetchCountNews());
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <div className="block">
      <div className="container">
        <h1 className="block__title">НОВОСТИ</h1>
        {isLoading && <Loader />}
        <NewsList />
      </div>
    </div>
  );
};

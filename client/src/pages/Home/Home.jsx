import { Intro } from "./components/Intro";
import { HomeServices } from "./components/HomeServices";
import { HomeForm } from "./components/HomeForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../store/reducers/workersSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);

  useEffect(() => {
    if (workers.length === 0) {
      dispatch(fetchWorkers());
    }
  }, []);

  return (
    <div className="block block-home">
      <Intro />
      <HomeServices />
      <HomeForm />
    </div>
  );
};

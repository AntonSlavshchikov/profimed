import { Intro } from "./components/Intro";
import { HomeServices } from "./components/HomeServices";
import { HomeForm } from "./components/HomeForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkers } from "../../store/reducers/workersSlice";
import { fetchServices } from "../../store/reducers/servicesSlice";
import { fetchTypeServices } from "../../store/reducers/typeServicesSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);
  const typeServices = useSelector((state) => state.typeServices.typeServices);
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    if (workers.length === 0) {
      dispatch(fetchWorkers());
    }
    if (services.length === 0) {
      dispatch(fetchServices());
    }
    if (typeServices.length === 0) {
      dispatch(fetchTypeServices());
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

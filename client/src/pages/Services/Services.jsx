import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../store/reducers/servicesSlice";
import { fetchTypeServices } from "../../store/reducers/typeServicesSlice";
import { useEffect, useState } from "react";
import { ServicesItem } from "./components/ServicesItem";
import { ListEmpty } from "../../components/ListEmpty/ListEmpty";
import { Loader } from "../../components/UI/Loader/Loader";

export const Services = () => {
    const type = useSelector(state => state.typeServices.typeServices);
    const services = useSelector(state => state.services.services);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (type.length === 0) {
            if (services.length === 0) {
                setIsLoading(true);
                dispatch(fetchTypeServices());
                dispatch(fetchServices());
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000)
               
            }
        }
    }, [dispatch, type.length, services.length]);

    return (
        <div className="block">
            <div className="container">
                <h1 className="block__title">Наши услуги</h1>
                {
                    isLoading && <Loader />
                }
                {
                    type.length !== 0
                        ? type.map((item) =>
                            <div className="services" key={item.id}>
                                <h5 className="servicrs__title">{item.title}</h5>
                                {
                                    services.map((service) =>
                                        service.type === item.id && <ServicesItem key={service.id} service={service} />
                                    )
                                }
                            </div>
                        )
                        : <ListEmpty />
                }
            </div>
        </div>
    );
}
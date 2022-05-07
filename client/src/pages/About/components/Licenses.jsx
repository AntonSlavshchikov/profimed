import { useSelector } from "react-redux";

export const Licenses = () => {
    const licenses = useSelector(state => state.licenses.licenses);
    return (
        <div className="licenses">
            {licenses.map((item) =>
                <div className="licenses__item" key={item.id}>
                    <a href={process.env.REACT_APP_API_URL + item.image} target="_blank"><img src={process.env.REACT_APP_API_URL + item.image} alt="" className="licenses__img" /></a>
                    <h3 className="licenses__link" target="_blank">
                        {item.title}
                    </h3>
                </div>
            )}
        </div>
    );
}
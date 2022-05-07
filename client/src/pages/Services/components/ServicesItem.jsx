export const ServicesItem = (props) => {
    return (
        <div className="services__item">
            <h6 className="services__text">{props.service.title}</h6>
            <h6 className="services__text">{props.service.price} руб.</h6>
        </div>
    );
}
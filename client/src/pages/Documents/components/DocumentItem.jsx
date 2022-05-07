export const DocumentItem = (props) => {
    return (
        <div className="document__item" key={props.document.id}>
            <h3 className="document__title">
                {props.document.title}
            </h3>
            <p className="document__text">
                {props.document.text}
            </p>
            <a href={process.env.REACT_APP_API_URL + props.document.file} className="document__link" target="_blank">
                Скачать: "{props.document.title}"
            </a>
        </div>
    );
}
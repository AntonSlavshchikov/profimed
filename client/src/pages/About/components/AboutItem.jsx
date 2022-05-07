export const AboutItem = (props) => {
    return (
        <div className="about__item" key={props.about.id}>
            <h3 className="about__title">
                {props.about.title}
            </h3>
            <p className="about__text">
                {props.about.text}
            </p>
            {
                props.about.file !== null &&
                <a href={process.env.REACT_APP_API_URL + props.about.file} className="about__link" target="_blank">
                    Скачать: "{props.about.title}"
                </a>
            }

        </div>
    );
}
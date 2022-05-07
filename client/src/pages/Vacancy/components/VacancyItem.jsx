import ReactMarkdown from "react-markdown";

export const VacancyItem = (props) => {
    const mark = `Ищу  \nРаботника\nИт`;
    return (
        <div className="vacancy__item">
            <h3 className="vacancy__title">{props.vacancy.title}</h3>
            <p className="vacancy__text"><span className="vacancy__info">Заработная плата:</span> {props.vacancy.price} рублей.</p>
            <p className="vacancy__text"><span className="vacancy__info">Описание:</span> {props.vacancy.text}</p>
        </div>
    );
}
import { formatDate } from "../../../assets/js/functions";
export const NewsItem = (props) => {
    const openNews = (id) => {
        document.getElementById(id).classList.toggle("open")
        if(document.getElementById(`a${id}`).innerHTML === "Читать далее..."){
            document.getElementById(`a${id}`).innerHTML = "Скрыть";
        }
        else{
            document.getElementById(`a${id}`).innerHTML = "Читать далее...";
        }
    }

    return (
        <div className="news__item" key={props.news.id}>
            <div className="news__content">
                <img src={process.env.REACT_APP_API_URL + props.news.image} alt="" className="news__img" />
                <div className="news__block">
                    <div className="news__header">
                        <h3 className="news__title">{props.news.title}</h3>
                        <h3 className="news__title">{formatDate(props.news.date)}</h3>
                    </div>
                    <p className="news__text" id={props.news.id}>{props.news.text}</p>
                    {
                        props.news.text.length > 190
                        ? <a className="news__link" id={"a" + props.news.id} onClick={() => openNews(props.news.id)}>Читать далее...</a>
                        : ""
                    }
                    {/* <a className="news__link" onClick={() => openNews(props.news.id)}>Читать далее...</a> */}
                </div>
            </div>
            <hr />
        </div>
    );
}
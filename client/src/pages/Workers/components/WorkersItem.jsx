import foneImg from "../../../assets/Workers/fone.svg.png";
import { useNavigate } from "react-router-dom";

export const WorkersItem = (props) => {
  const navigate = useNavigate();
  const declension = ["год", "года", "лет"];

  const plural = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  return (
    <div className="workers__item">
      <div className="workers__content">
        <h6 className="workers__title">{props.workers.fio}</h6>
        <h6 className="workers__status">{props.workers.status}</h6>
        <div className="workers__stage">
          <h1 className="stage__year">{props.workers.experience}</h1>
          <p className="stage__text"> {plural(props.workers.experience, declension)} стажа</p>
        </div>
        {/* <p className="workers__text">{props.workers.progress}</p>

                <a className="workers__link" onClick={() => navigate(`/workers/${props.workers.id}`)}>Узнать подробнее о враче</a> */}
      </div>
      <img
        src={process.env.REACT_APP_API_URL + props.workers.image}
        alt=""
        className="workers__img"
      />

      <a className="workers__link-mobile" onClick={() => navigate(`/workers/${props.workers.id}`)}>
        Узнать подробнее о враче
      </a>
      <img src={foneImg} alt="" className="workers__fone" />
    </div>
  );
};

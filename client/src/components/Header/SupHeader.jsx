import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";

export const SupHeader = () => {
  return (
    <div className="sup__header">
      <div className="container">
        <div className="sup__header__inner">
          <div className="sup__header__item">
            <a
              href="https://yandex.ru/maps/66/omsk/house/ulitsa_gertsena_38/Y0oYdQBjS0MGQFtufXV4dn5mYA==/?indoorLevel=1&ll=73.373261%2C54.997254&z=17.09"
              className="sup__header__link"
              target="_blank"
            >
              г.Омск ул. Герцена 38
            </a>
            <a href="tel:499-678<" className="sup__header__link">
              499-678
            </a>
            <a href="tel:+79502125872<" className="sup__header__link">
              +7 (950) 212-58-72
            </a>
          </div>
          <div className="sup__header__item">
            <a href="#" target="_blank" className="sup__header__link">
              <FontAwesomeIcon className="sup__header__ico sup__header__ico-vk" icon={faVk} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

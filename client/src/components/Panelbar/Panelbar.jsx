import { Link } from "react-router-dom";
import { useState } from "react";
export const Panelbar = () => {
    const [item, setItem] = useState(0);
    const activeLink = (id) => {
        document.getElementsByClassName("panelbar__link")[item].classList.remove("active");
        setItem(id);
        document.getElementsByClassName("panelbar__link")[id].classList.add("active");
    }

    return (
        <div className="panelbar">
            <div className="panelbar__inner">
                <Link to="admin_news" className="panelbar__link" onClick={() => activeLink(0)}>Новости</Link>
                <Link to="admin_documents" className="panelbar__link" onClick={() => activeLink(1)}>Документы</Link>
                <Link to="admin_vacancy" className="panelbar__link" onClick={() => activeLink(2)}>Вакансии</Link>
                <Link to="admin_reviews" className="panelbar__link" onClick={() => activeLink(3)}>Отзывы</Link>
                <Link to="admin_workers" className="panelbar__link" onClick={() => activeLink(4)}>Сотрудники</Link>
                <Link to="admin_typeservices" className="panelbar__link" onClick={() => activeLink(5)}>Типы услуг</Link>
                <Link to="admin_services" className="panelbar__link" onClick={() => activeLink(6)}>Услуги</Link>
                <Link to="admin_typeabout" className="panelbar__link" onClick={() => activeLink(7)}>Типы "О нас"</Link>
                <Link to="admin_about" className="panelbar__link" onClick={() => activeLink(8)}>О нас</Link>
                <Link to="admin_licenses" className="panelbar__link" onClick={() => activeLink(9)}>Лицензии</Link>
            </div>
        </div>
    );
}
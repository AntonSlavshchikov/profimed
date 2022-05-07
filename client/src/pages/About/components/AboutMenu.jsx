import { useSelector } from "react-redux";

export const AboutMenu = () => {
    const typeAbout = useSelector(state => state.typeAbout.typeAbout);
    const licenses = useSelector(state => state.licenses.licenses);
    return (
        <div className="about__menu">
            <div className="about__sticky">
                {typeAbout.map((item, index) =>
                    <a href={`#${item.id}`} className="about__menu-item" key={index}>{item.title}</a>
                )}
                {
                    licenses.length !== 0
                    ? <a href="#licenses" className="about__menu-item">Лицензии</a>
                    : <div></div>
                }
                <a href="#info" className="about__menu-item">Как до нас добраться?</a>
            </div>
        </div>
    );
}
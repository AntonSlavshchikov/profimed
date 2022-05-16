import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { AboutMenu } from "./components/AboutMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTypeAbout } from "../../store/reducers/typeAboutSlice";
import { fetchAbout } from "../../store/reducers/aboutSlice";
import { AboutList } from "./components/AboutList";
import { Licenses } from "./components/Licenses";
import { fetchLicenses } from "../../store/reducers/licensesSlice";
import { Loader } from "../../components/UI/Loader/Loader";

export const About = () => {
  const dispatch = useDispatch();
  const typeAbout = useSelector((state) => state.typeAbout.typeAbout);
  const about = useSelector((state) => state.about.about);
  const licenses = useSelector((state) => state.licenses.licenses);
  const [isLoading, setIsLoadig] = useState(false);

  const mapData = {
    center: [54.997562, 73.373216],
    zoom: 15,
  };

  const coordinates = [[54.997562, 73.373216]];

  useEffect(() => {
    if (typeAbout.length === 0) {
      dispatch(fetchTypeAbout());
    } else {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    if (licenses.length === 0) {
      dispatch(fetchLicenses());
    }
  }, []);

  useEffect(() => {
    if (about.length === 0) {
      setIsLoadig(true);
      dispatch(fetchAbout());
      setTimeout(() => {
        setIsLoadig(false);
      }, 1000);
    }
  }, []);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.id);
        if (entry.isIntersecting) {
          document.querySelectorAll(".about__menu-item").forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href").replace("#", "") === entry.target.id
            );
          });
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".about__block").forEach((block) => observer.observe(block));

  if (document.querySelector(".about__sticky")) {
    document.querySelector(".about__sticky").addEventListener("click", (event) => {
      if (event.target.classList.contains(".about__menu-item")) {
        event.preventDefault();

        const id = event.target.getAttribute("href").replace("#", "");
        window.scrollTo({
          top: document.getElementById(id).offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
  return (
    <div className="block">
      <div className="container">
        <h1 className="block__title">О нас</h1>
        {isLoading && <Loader />}
        <div className="about">
          <AboutMenu />
          <div className="about__content">
            <AboutList />
          </div>
        </div>
        <div className="about__block" id="licenses">
          {licenses.length !== 0 ? <h5 className="about__block-title">Лицензии</h5> : <div></div>}
          <Licenses />
        </div>
        <div className="about__block" id="info">
          <h5 className="about__block-title">Как до нас добраться?</h5>
          <div className="contact__contacts">
            <YMaps>
              <Map defaultState={mapData} className="map">
                {coordinates.map((coordinate) => (
                  <Placemark key={1} geometry={coordinate} />
                ))}
              </Map>
            </YMaps>

            <div className="contact__item">
              <div className="contact__content">
                <div className="contact__time">
                  <p>Понедельник.....................с 10:00 до 20:00</p>
                  <p>Вторник...............................с 10:00 до 20:00</p>
                  <p>Среда....................................с 10:00 до 20:00</p>
                  <p>Четверг................................с 10:00 до 20:00</p>
                  <p>Пятница...............................с 10:00 до 20:00</p>
                  <p>Суббота................................с 10:00 до 20:00</p>
                </div>
                <div className="contact__info">
                  <a className="contact__item__link" href="">
                    г. Омск, ул. Герцена, д.38
                  </a>
                  <a className="contact__item__link" href="">
                    Телефон: 499-678
                  </a>
                  <a className="contact__item__link" href="">
                    E-mail: profimed55@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

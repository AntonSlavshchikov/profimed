import { MyInput } from "../../../components/UI/Input/MyInput";
import { MyButton } from "../../../components/UI/Button/MyButton";
import { useState } from "react";

export const HomeForm = () => {
    const [check, setCheck] = useState(false);
    const [disable, setDisable] = useState(true);

    const handleChange = () => {
        setCheck(!check);
        setDisable(check);
      };

    return (
        <div className="home__form" id="homeForm">
            <div className="container">
                <div className="home__form__inner">
                    <form action="" data-aos="fade-right">
                        <h3 className="home__form__title">Запишитесь на приём к врачу - онлайн</h3>
                        <p className="home__form__text">Заполните форму и наш консультант <br />
                            Вам перезвонит!</p>
                        <MyInput placeholder="ФИО" />
                        <MyInput placeholder="Номер телефона" />
                        <div>
                            <input type="checkbox" checked={check} onChange={handleChange}/>
                            <label className="home__form__text">Согласие на обработку персональных данных</label>
                        </div>

                        <MyButton disabled={disable} style={{ marginTop: '20px' }} onChange={(e) => e.target.value}>Отправить</MyButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
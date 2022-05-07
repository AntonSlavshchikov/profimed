import { MyButton } from "../../../components/UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
    const navigate = useNavigate();
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__content" data-aos="fade-up">
                        <h5 className="intro__sup__title">МНОГОПРОФИЛЬНАЯ КЛИНИКА</h5>
                        <h3 className="intro__title">ПРОФИМЕД</h3>
                        <p className="intro__text">Среди огромного количества предложений, так хочется выбрать лучшее.
                            Мы понимаем Вас и предлагаем отличные условия для заботы о своём здоровье
                            и благополучии своих близких. Клиника ПРОФИМЕД предлагает только
                            высокопрофессиональный
                            подход к решению накопившихзся проблем с Вашим здоровьем.</p>
                        <MyButton onClick={() => navigate("/services")}>Посмотреть прайс-лист</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
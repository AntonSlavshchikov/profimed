import imgOne from '../../assets/Footer/1.png';
import imgTwo from '../../assets/Footer/2.png';
import imgThree from '../../assets/Footer/3.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__tem">
                            <img src={imgOne} alt="" className="footer__img" />
                            <div className='footer__name'>г. Омск, ул. Сенная, дом 22.</div>
                            <div className='footer__name'>(3812) 20-11-04, Факс: 21-31-05</div>
                        </div>
                        <div className="footer__tem">
                            <img src={imgTwo} alt="" className="footer__img" />
                            <div className='footer__name'>г. Омск, ул. Красный путь, дом 6.</div>
                            <div className='footer__name'>(3812) 23-06-29; 23-06-25;
                                21-12-26
                            </div>
                        </div>
                        <div className="footer__tem">
                            <img src={imgThree} alt="" className="footer__img" />
                            <div className='footer__name'>г. Омск, ул. 10 лет Октября, дом 98</div>
                            <div className='footer__name'>Горячая линия - (3812) 32-60-32</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__inner">
                <div className="container">
                    <p className='footer__text'>Все виды предоставленных услуг осуществляются на основании
                        лицензии № ЛО-55-01-002160 от 07.07.17</p>
                    <p className='footer__text'>© 2022 ООО «Профи-Мед»</p>
                </div>
            </div>
        </footer>
    );
}
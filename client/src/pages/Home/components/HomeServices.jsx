import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const HomeServices = () => {
    return (
        <div className="home__services">
            <div className="container">
                <h3 className="home__services__title"  data-aos="fade-right">7 основных услуг нашей клиники</h3>
                <Swiper  data-aos="fade-down"
                    breakpoints={
                        {
                            990:{
                                slidesPerView: 3
                            },
                            767:{
                                slidesPerView: 2
                            },
                            576:{
                                slidesPerView: 1
                            },
                        }
                    }
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">ГИНЕКОЛОГИЯ</h3>
                            <p className="services__swipe__text">Оперативная гинекология, лапароскопия, медикаментозные
                                аборты. Предоперационное обследование, операции на базах
                                омских клиник, послеоперационное ведение.
                                Гинеколог-эндокринолог</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">КАРДИОЛОГИЯ</h3>
                            <p className="services__swipe__text">Консультация опытного кардиолога позволит своевременно
                                выявить факторы риска развития заболеваний сердца. Для постановки диагноза врач,
                                не только собирает анамнез,
                                проводит подробную беседу, но и использует данные инструментальной диагностики.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">МАММОЛОГИЯ</h3>
                            <p className="services__swipe__text">Имея возможность в одном месте проконсультироваться у
                                необходимых врачей-специалистов, сдать анализы, провести диагностику
                                и получить лечение, вы избегаете утомительного хождения по разным учреждениям в
                                поисках нужного специалиста, экономите время.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">НЕВРОЛОГИЯ</h3>
                            <p className="services__swipe__text">Рефлексотерапия, биорезонансная терапия. Лечение заболеваний нервной системы при
                                остеохондрозе позвоночника (радикулиты, грыжи межпозвонковых дисков), головных болей
                                (последствия травм головы, позвоночника, мигрени).
                                Состояний после перенесенного инсульта с нарушением двигатель ных и психических функций.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">ЭНДОКРИНОЛОГИЯ</h3>
                            <p className="services__swipe__text">Вы можете пройти комплексное эндокринологическое обследование:
                                УЗИ щитовидной железы эксперт-класса,
                                любые виды лабораторной диагностики (гормональный профиль, липидный профиль и т.д.),
                                осмотр и консультацию врача.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">ТЕРАПИЯ</h3>
                            <p className="services__swipe__text">В сферу деятельности врача-терапевта включен
                                довольно обширный спектр действий — от лечения простудных заболеваний до
                                направления к узкому специалисту. Приём терапевта, консультация перед операцией</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__services__content">
                            <h3 className="services__swipe__title">УЛЬТРАЗВУКОВЫЕ ИССЛЕДОВАНИЯ</h3>
                            <p className="services__swipe__text">В сферу деятельности врача-терапевта включен довольно обширный спектр
                                действий — от лечения простудных заболеваний до направления к узкому специалисту.
                                Приём терапевта, консультация перед операцией</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
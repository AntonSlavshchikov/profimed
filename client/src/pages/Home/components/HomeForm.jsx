import { MyInput } from "../../../components/UI/Input/MyInput";
import { MyButton } from "../../../components/UI/Button/MyButton";
import { useState } from "react";
import { createAppForm } from "../../../http/appFormAPI";
import { useSelector } from "react-redux";
import { MySelect } from "../../../components/UI/MySelect/MySelect";

export const HomeForm = () => {
  const [check, setCheck] = useState(false);
  const [disable, setDisable] = useState(true);
  const [fio, setFio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectItem, setSelectItem] = useState("");
  const workers = useSelector((state) => state.workers.workers);

  const handleChange = () => {
    setCheck(!check);
    setDisable(check);
  };

  const sendForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fio", fio);
    formData.append("numberPhone", phoneNumber);
    formData.append("mark", false);
    formData.append("doctor", selectItem);
    createAppForm(formData);

    setFio("");
    setPhoneNumber("");
    setCheck(!check);
    setSelectItem("");
    alert("Заявка отправлена!");
  };

  return (
    <div className="home__form" id="homeForm">
      <div className="container">
        <div className="home__form__inner">
          <form action="" data-aos="fade-right" onSubmit={(e) => sendForm(e)}>
            <h3 className="home__form__title">Запишитесь на приём к врачу - онлайн</h3>
            <p className="home__form__text">
              Заполните форму и наш консультант <br />
              Вам перезвонит!
            </p>
            <MyInput
              placeholder="ФИО"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
              required
            />
            <MyInput
              type="number"
              placeholder="Номер телефона"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <MySelect value={selectItem} onChange={(e) => setSelectItem(e.target.value)} required>
              {workers.map((item) => (
                <option key={item.id} className="my-select__options" value={item.fio}>
                  {item.fio}
                </option>
              ))}
            </MySelect>
            <div>
              <input type="checkbox" checked={check} onChange={handleChange} />
              <label className="home__form__text">Согласие на обработку персональных данных</label>
            </div>

            <MyButton
              disabled={disable}
              style={{ marginTop: "20px" }}
              onChange={(e) => e.target.value}
            >
              Отправить
            </MyButton>
          </form>
        </div>
      </div>
    </div>
  );
};

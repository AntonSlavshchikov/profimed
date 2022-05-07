import logo from "../../assets/logo/logo.png";
import { Navbar } from "../Navbar/Navbar";

export const HeaderInner = () => {
  return (
    <div className="header__inner">
      <div className="container">
        <div className="header__content">
          <img src={logo} alt="" className="header__img" />
          <Navbar />
        </div>
      </div>
    </div>
  );
};

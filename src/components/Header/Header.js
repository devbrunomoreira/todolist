import React from "react";
import logo from "../../assets/imgs/todoIconDone.png";
import userIcon from '../../assets/imgs/userIcon.svg';
import addIcon from '../../assets/imgs/addIcon.svg'
import "./Header.scss";

const Header = props => {
  return (
    <div className="header">
        <img src={addIcon} className="header__add" />
      <img src={logo} className="header__logo" />
      <img src={userIcon} className="header__user" />
    </div>
  );
};

export default Header;

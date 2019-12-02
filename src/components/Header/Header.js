import React from "react";
import logo from "../../assets/imgs/todoIconDone.png";
import userIcon from '../../assets/imgs/userIcon.svg';
import addIcon from '../../assets/imgs/addIcon.svg'
import "./Header.scss";

const Header = props => {
  return (
    <div className="header">
      <img src={addIcon} className="header__add" onClick={props.onClickLeft} />
      <div className="header__middle">
        <img src={logo} className="header__logo" />
        <h3>TO DO LIST</h3>
      </div>
      <img src={userIcon} className="header__user" />
    </div>
  );
};

export default Header;

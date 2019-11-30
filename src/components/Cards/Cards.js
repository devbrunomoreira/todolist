import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import Modal from "@material-ui/core/Modal";
import logo from "../../assets/imgs/todoIconDone.png";
import userIcon from "../../assets/imgs/userIcon.svg";
import addIcon from "../../assets/imgs/addIcon.svg";
import './Cards.scss'

const Cards = props => {
  const [listCard, setListCard] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [textCard, setTextCard] = useState("");
  const [countID, setCountID] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCard = () => {
    setListCard([
      ...listCard,
      {
        title: userInput,
        text: textCard,
        checked: false,
        id: countID
      }
    ]);
    setCountID(countID + 1);
  };
  const handleChecked = item => {
    let index = listCard.findIndex(element => element.id === item.id);
    setListCard([
      ...listCard.slice(0, index),
      {
        title: item.title,
        text: item.text,
        checked: !item.checked,
        id: item.id
      },
      ...listCard.slice(index + 1)
    ]);
  };
  const removeCard = item => {
    let filtered = listCard.filter(element => element.id !== item.id);
    setListCard(filtered);
  };
  return (
    <div>
      <div>
        <div>
          <div className="header">
            <img src={addIcon} className="header__add" onClick={handleOpen} />
            <div className="header__middle">
              <img src={logo} className="header__logo" />
              <h3>TO DO LIST</h3>
            </div>
            <img src={userIcon} className="header__user" />
          </div>

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <div className="modal">
              <div className="modal__form">
                <p>TO DO</p>
                <input
                  type="text"
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Título do Card"
                  className="modal__form--title"
                />
              </div>
              <div className="modal__form--second">
                <textarea
                  type="text"
                  wrap="hard"
                  placeholder="Descrição da tarefa"
                  value={textCard}
                  onChange={e => setTextCard(e.target.value)}
                  className="modal__form--text"
                />
              </div>
              <button onClick={() => handleCard()}>Cadastar</button>
            </div>
          </Modal>
        </div>
      </div>

      {listCard.map(item => (
        <Card
          key={item.id}
          item={item}
          handleChecked={handleChecked}
          removeCard={removeCard}
        />
      ))}
    </div>
  );
};

export default Cards;

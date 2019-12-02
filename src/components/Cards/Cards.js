import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../actions";
import Card from "../Card/Card";
import Modal from "@material-ui/core/Modal";
import Header from "../Header/Header";
import "./Cards.scss";

const Cards = props => {
  const [userInput, setUserInput] = useState("");
  const [textCard, setTextCard] = useState("");
  const [countID, setCountID] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const listCard = useSelector(state => state.cardState.listCard);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCard = () => {
    setCountID(countID + 1);
    const card = {
      title: userInput,
      text: textCard,
      checked: false,
      id: countID
    };
    dispatch(
      actionTypes.addCard(card)
    );

    handleClose();
    setUserInput("");
    setTextCard("");
  };
  const handleChecked = item => {
    dispatch(actionTypes.handleCheck(item.id));
  };
  const removeCard = item => {
    dispatch(actionTypes.removeCard(item.id));
  };
  return (
    <div>
      <div>
        <div>
          <Header onClickLeft={handleOpen} />
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

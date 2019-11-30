import React, { useState } from "react";
import "./Card.scss";

const Card = props => {
  return (
    <div className="card">
        <input
          type="checkbox"
          onClick={() => props.handleChecked(props.item)}
          checked={props.item.checked}
        />
      <div className="card__content">
        <header className="card__content--header">
          <h1>{props.item.title}</h1>
        </header>
        <div className="card__content--text">
          <h2>{props.item.text}</h2>
        </div>
        <button onClick={() => props.removeCard(props.item)}>remover</button>
      </div>
    </div>
  );
};

export default Card;

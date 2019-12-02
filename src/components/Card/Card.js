import React, { useState } from "react";
import "./Card.scss";

const Card = ({ item, removeCard, handleChecked }) => {
  return (
    <div className="card">
      <input
        type="checkbox"
        onClick={() => handleChecked(item)}
        value={item.checked}
      />
      <div className="card__content">
        <header className="card__content--header">
          <h1>{item.title}</h1>
        </header>
        <div className="card__content--text">
          <h2>{item.text}</h2>
        </div>
        <button onClick={() => removeCard(item)}>remover</button>
      </div>
    </div>
  );
};

export default Card;

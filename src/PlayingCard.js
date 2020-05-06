import React from 'react';
import './PlayingCard.css';

const PlayingCard = ({ id, value, faceDown, handleClick }) => (
    <div
      className={`PlayingCard${faceDown ? " face-down" : ""}`}
      onClick={() => handleClick(id, value)}
    >
      <p>{value}</p>
    </div>
  );

export default PlayingCard;

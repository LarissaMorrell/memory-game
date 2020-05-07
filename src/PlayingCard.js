import React from 'react';
import './PlayingCard.css';

const PlayingCard = ({ id, value, faceUp, handleClick }) => (
    <div
      className={`PlayingCard${faceUp ? " face-up-card" : ""}`}
      onClick={() => handleClick(id, value)}
    >
      { !faceUp ? <p>{value}</p> : <img src="./jh_logo" alt="face down card" /> }
    </div>
  );

export default PlayingCard;

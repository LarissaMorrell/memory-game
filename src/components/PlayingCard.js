import React from 'react';
import logo from '../assets/jh_logo.png';
import './PlayingCard.css';

const PlayingCard = ({ id, value, faceUp, handleClick }) => (
    <div
      className={`PlayingCard${faceUp ? " face-up-card" : ""}`}
      onClick={() => handleClick(id, value)}
    >
      {faceUp ? <p>{value}</p> : <img src={logo} alt="face down card" />}
    </div>
  );

export default PlayingCard;

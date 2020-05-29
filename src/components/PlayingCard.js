import React from 'react';
import ReactCardFlip from 'react-card-flip';
import logo from '../assets/card_design.jpg';
import './PlayingCard.css';

const PlayingCard = ({ id, value, faceUp, handleClick }) => (
  <div id="PlayingCardContainer">
    <ReactCardFlip isFlipped={faceUp} flipDirection="horizontal">
      <div
        className="PlayingCard"
        onClick={() => handleClick(id, value)}
      >
        <img src={logo} alt="face down card" />
      </div>
      <div
        className="PlayingCard face-up-card"
        onClick={() => handleClick(id, value)}
      >
        <p>{value}</p>
      </div>
    </ReactCardFlip>
  </div>
  );

export default PlayingCard;

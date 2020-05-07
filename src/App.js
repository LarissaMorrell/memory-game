import React, { useState } from 'react';
import Board from './containers/Board';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [cardValues, setCardValues] = useState();

  const handleSelection = level => {
    setLevel(level);
    assignCardValues(level);
  };

  const assignCardValues = (level) => {
    const cards = [];
    const cardCount = level * level;

    for (let i = 0; i < cardCount; i++) {
      cards.push(i % (cardCount / 2) + 1);
    }

    for (let i = 0; i < cardCount - 1; i++) {
      const randIdx = Math.floor(Math.random() * (cardCount - i)) + i;
      if (randIdx !== i) {
        const temp = cards[i];
        cards[i] = cards[randIdx];
        cards[randIdx] = temp;
      }
    }
    setCardValues(cards);
  }
  
  return (
    <div className="App">
      <header>
        <h1>Quarantine Time Killer: Match Game</h1>
        <p>A project created by Larissa Morrell, May 2020</p>
      </header>
      {level ? (
          <Board level={level} cardValues={cardValues} />
        ) : (
        <>
          <p>Pick your level</p>
          <div className="level-btn-container">
            <button onClick={() => handleSelection(2)}>Piggy Bank</button>
            <button onClick={() => handleSelection(4)}>Savings Account</button>
            <button onClick={() => handleSelection(6)}>High Risk Assets</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Board from './Board';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [cardValues, setCardValues] = useState();

  const handleSelection = ({ target }) => {
    const level = target.value;
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
      {console.log("app render")}
      {level ? (
          <Board level={level} cardValues={cardValues} />
        ) : (
        <div className="selection-container">
          <label htmlFor="level-select">
            Pick your level:
          </label>
          <select
            id="level-select"
            onChange={handleSelection}
          >
            <option value="2">Piggy Bank</option>
            <option value="4">Savings Account</option>
            <option value="6">High Risk Assets</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default App;

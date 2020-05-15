import React, { useState } from 'react';
import Timer from './components/Timer';
import Board from './containers/Board';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [cardValues, setCardValues] = useState();
  const [score, setScore] = useState({ wins: 0, losses: 0});

  const handleSelection = level => {
    setLevel(level);
    assignCardValues(level);
  };

  const handleEndGame = win => {
    if (win) {
      setScore({ ...score, wins: score.wins + 1 });
      alert("You Win!");
    } else {
      setScore({ ...score, losses: score.losses + 1 });
      alert("You Lose!");
    }
    setLevel(null);
  }

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
        <p>You will have 90 seconds to complete all matches</p>
      </header>
      <h3 className="scoreboard">
        {`Wins: ${score.wins}, Losses: ${score.losses}`}
      </h3>
      {level ? (
          <>
            <button className="reset-button" onClick={() => handleEndGame(false)}>
              Reset
            </button>
            <Timer endGame={() => handleEndGame(false)} />
            <Board level={level}
              cardValues={cardValues}
              handleEndGame={() => handleEndGame(true)}
            />
          </>
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

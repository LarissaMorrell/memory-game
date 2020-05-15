import React, { useState } from 'react';
import Timer from './components/Timer';
import Board from './containers/Board';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState({ wins: 0, losses: 0});

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
            <Board
              level={level}
              handleEndGame={() => handleEndGame(true)}
            />
          </>
        ) : (
        <>
          <p>Pick your level</p>
          <div className="level-btn-container">
            <button onClick={() => setLevel(2)}>Piggy Bank</button>
            <button onClick={() => setLevel(4)}>Savings Account</button>
            <button onClick={() => setLevel(6)}>High Risk Assets</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

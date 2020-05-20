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
        {level ?
          <Timer endGame={() => handleEndGame(false)} />
          : (
          <div>
            <p>A project created by Larissa Morrell, May 2020</p>
            <p>You will have 90 seconds to complete all matches. Beat the clock to win the round!</p>
          </div>
        )}
        <h3 className="scoreboard">
          {`Wins: ${score.wins}, Losses: ${score.losses}`}
        </h3>
      </header>
      {level ? (
          <>
            <button className="reset-button" onClick={() => handleEndGame(false)}>
              Reset
            </button>
            <Board
              level={level}
              handleEndGame={() => handleEndGame(true)}
            />
          </>
        ) : (
        <>
          <p>Pick your level</p>
          <div className="level-btn-container">
            <button onClick={() => setLevel(2)}>Beginner</button>
            <button onClick={() => setLevel(4)}>Intermediate</button>
            <button onClick={() => setLevel(6)}>Advanced</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

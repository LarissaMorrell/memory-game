import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Timer from './components/Timer';
import Board from './containers/Board';
import Overlay from './components/Overlay';
import WinLoseModal from './components/WinLoseModal';
import ResetModal from './components/ResetModal';
import './App.css';

function App() {
  const [level, setLevel] = useState(null);
  const [score, setScore] = useState({ wins: 0, losses: 0});
  const [modal, setModal] = useState(null);

  const handleEndGame = (resetLevel=true) => {
    if (modal === "win") {
      setScore({ ...score, wins: score.wins + 1 });
    } else if (modal === "lose" || modal === "reset") {
      setScore({ ...score, losses: score.losses + 1 });
    }
    resetLevel && setLevel(null);
    setModal(null);
  }

  return (
    <div className="App">
      <header>
        <h1>Quarantine Time Killer: Match Game</h1>
        {level ?
          <Timer endGame={() => setModal("lose")} />
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
            <Button onClick={() => setModal("reset")}>
              Reset
            </Button>
            <Board
              level={level}
              winGame={() => setModal("win")}
            />
          </>
        ) : (
        <>
          <p>Pick your level</p>
          <div className="level-btn-container">
            <Button onClick={() => setLevel(2)} variant="contained" size="large">Beginner</Button>
            <Button onClick={() => setLevel(4)} variant="contained" size="large">Intermediate</Button>
            <Button onClick={() => setLevel(6)} variant="contained" size="large">Advanced</Button>
          </div>
        </>
      )}
      {(modal === "win" || modal === "lose") && (
        <Overlay
          content={<WinLoseModal type={modal} endGamePress={handleEndGame}/>}
        />
      )}
      {modal === "reset" && (
        <Overlay
          closeOverlay={() => setModal(null)}
          content={
            <ResetModal endGamePress={handleEndGame} cancelPress={() => setModal(null)} />
          }
        />
      )}
    </div>
  );
}

export default App;

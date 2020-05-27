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
  const [gameID, setGameID] = useState();

  const handleScoreChange = win => {
    if (win) {
      setScore({ ...score, wins: score.wins + 1 });
    } else {
      setScore({ ...score, losses: score.losses + 1 });
    }
  }

  const handleNewGame = (newLevel) => {
    setModal(null);
    setGameID(Math.floor(Math.random() * 100000000));
    typeof newLevel !== "undefined" && setLevel(newLevel);
  }

  const viewWinLoseModal = win => {
    handleScoreChange(win);
    setModal(win ? "win" : "lose");
  }

  return (
    <div className="App">
      <header>
        <h1>Quarantine Time Killer: Match Game</h1>
        {level ? (
          <Timer
            gameID={gameID}
            paused={!!modal}
            handleLoseGame={() => viewWinLoseModal(false)}
          />
          ) : (
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
              gameID={gameID}
              level={level}
              paused={!!modal}
              handleWinGame={() => viewWinLoseModal(true)}
            />
          </>
        ) : (
        <>
          <p>Pick your level</p>
          <div className="level-btn-container">
            <Button onClick={() => handleNewGame(2)} variant="contained" size="large">Beginner</Button>
            <Button onClick={() => handleNewGame(4)} variant="contained" size="large">Intermediate</Button>
            <Button onClick={() => handleNewGame(6)} variant="contained" size="large">Advanced</Button>
          </div>
        </>
      )}
      { modal && (
        modal === "reset" ? (
          <Overlay
            closeOverlay={() => setModal(null)}
            content={
              <ResetModal
                endGamePress={handleNewGame}
                cancelPress={() => setModal(null)}
                incrLoseScore={() => handleScoreChange(false)}
              />
            }
          />
        ) : (
          <Overlay
            content={
              <WinLoseModal
                isWin={modal === "win"}
                newGamePress={handleNewGame}
              />}
          />
      ))}
    </div>
  );
}

export default App;

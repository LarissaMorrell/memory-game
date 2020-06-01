import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Board from './containers/Board';
import Header from './components/Header'
import WinLoseDialog from './components/WinLoseDialog';
import ResetDialog from './components/ResetDialog';
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

  const handleNewGame = (newLevel=level) => {
    setModal(null);
    setGameID(newLevel ? Math.floor(Math.random() * 100000000) : null);
    setLevel(newLevel);
  }

  const handleResetGame = newLevel => {
    handleScoreChange(false);
    handleNewGame(newLevel)
  }

  const handleWinLoseGame = win => {
    handleScoreChange(win);
    setModal(win ? "win" : "lose");
  }

  return (
    <div className="App">
      <Header
        score={score}
        paused={modal === "lose" || modal === "win"}
        gameID={gameID}
        handleWinLoseGame={handleWinLoseGame}
      />
      {level ? (
          <>
            <Button
              variant="outlined"
              onClick={() => setModal("reset")}
            >
              Reset
            </Button>
            <Board
              gameID={gameID}
              level={level}
              paused={!!modal}
              handleWinGame={() => handleWinLoseGame(true)}
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
        <ResetDialog
          resetGamePress={handleResetGame}
          cancelPress={() => setModal(null)}
          incrLoseScore={() => handleScoreChange(false)}
        />
        ) : (
        <WinLoseDialog
          isWin={modal === "win"}
          newGamePress={handleNewGame}
        />
      ))}
    </div>
  );
}

export default App;

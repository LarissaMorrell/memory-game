import React, { useState } from 'react';
import Game from './Game';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState(4); // TODO null };
  const handleSelection = ({ target }) => setDifficulty(target.value);

  return (
    <div className="App">
      <label htmlFor="difficulty-select">
        What's your motivation level right now?
      </label>
      <select
        id="difficulty-select"
        onChange={handleSelection}
      >
        <option value="4">Easy</option>
        <option value="6">Moderate</option>
        <option value="8">Hard</option>
      </select>
      {difficulty && <Game level={difficulty} />}
    </div>
  );
}

export default App;

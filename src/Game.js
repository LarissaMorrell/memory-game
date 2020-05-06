import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import './Game.css';

function Game ({level}) {
  const [matched, setMatched] = useState(new Set());
  const [selected, setSelected] = useState(null);

  const handleClick = (id, value) => {
    if (matched.has(id)) return;
    console.log("here", id, value)

    if (!selected) {
      console.log("setting");
      setSelected({ value, id });
    } else {
      
    }
  }

  let board = [];
  for (let r = 0; r < level; r++) {
    let row = [];
    for (let c = 0; c < level; c++) {
      row.push(
        <PlayingCard
          key={`r${r}-c${c}`}
          id={`r${r}-c${c}`}
          value={`${r}, ${c}`}
          faceDown={matched.has([r,c]) || (selected && selected.id === `r${r}-c${c}`)}
          handleClick={handleClick}
        />);
    }
    board.push(<div className="card-row" key={`row-${r}`}>{row}</div>);
  }

  return (
    <div>
      {board}
    </div>
  );
}

export default Game;
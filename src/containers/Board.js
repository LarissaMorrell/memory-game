import React, { useState } from "react";
import PlayingCard from "../components/PlayingCard";
import './Board.css';

function Board({ level, cardValues }) {
  const [matched, setMatched] = useState(new Set());
  const [selectedVal, setSelectedVal] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClick = (id, value) => {
    if (matched.has(id) || selectedIds.includes(id) || selectedIds.length > 1) return;

    // When a card has already been selected, we check the value.
    // If the value matches, we add it to matched and reset our selected
    // Otherwise, we add the new id to selected and then reset selected 1.5 secs later
    if (selectedIds.length) {
      if (value === selectedVal) {
        setMatched(new Set(matched).add(selectedIds[0]).add(id));
        setSelectedIds([]);
      } else {
        setSelectedIds([...selectedIds, id]);
        setTimeout(() => setSelectedIds([]), 1500);
      }
      setSelectedVal([]);
    } else {
      setSelectedIds([id]);
      setSelectedVal(value);
    }
  }

  let board = [];
  for (let r = 0; r < level; r++) {
    let row = [];
    for (let c = 0; c < level; c++) {
      const cardId = `r${r}-c${c}`;
      row.push(
        <PlayingCard
          key={cardId}
          id={cardId}
          value={cardValues[r * level + c]}
          faceUp={matched.has(cardId) || selectedIds.includes(cardId)}
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

export default Board;
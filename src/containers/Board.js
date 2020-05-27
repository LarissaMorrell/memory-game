import React, { useState, useEffect, useRef } from "react";
import PlayingCard from "../components/PlayingCard";
import './Board.css';

function Board({ gameID, level, paused, handleWinGame }) {
  const [matched, setMatched] = useState(new Set());
  const [selectedVal, setSelectedVal] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [cardValues, setCardValues] = useState();
  const prevGameIdRef = useRef();

  useEffect(() => {
    // When the GameID changes we start a new game
    if (prevGameIdRef.current !== gameID) {
      prevGameIdRef.current = gameID;
      resetBoard();
    }

    if (matched.size === Math.pow(level, 2) && !paused)
      handleWinGame();
  });

  const resetBoard = () => {
    matched.clear();
    setSelectedVal(null);
    setSelectedIds([]);
    shuffleCards();
  }

  const shuffleCards = () => {
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

  const handleSelectCard = (id, value) => {
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
          value={cardValues && cardValues[r * level + c]}
          faceUp={matched.has(cardId) || selectedIds.includes(cardId)}
          handleClick={handleSelectCard}
        />);
    }
    board.push(<div className="card-row" key={`row-${r}`}>{row}</div>);
  }
  return board;
}

export default Board;
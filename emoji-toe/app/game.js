import React, { useState } from 'react';
import Board from './board';

export default function Game({setStatus}) {
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
    const currenState = history[currentMoveIndex];
    const isXNext = currentMoveIndex % 2 === 0; 
    
    const handlePlay = (nextState) => {
        // check if tie state -- the board is full but no winners.
        if (history.length >= 9) {
            setStatus("No winners! Tied");
            return;
        }
        // grab the previous history and concat the current state.
        const nextHistory =  [...history.slice(0, currentMoveIndex+1), nextState];
        setHistory(nextHistory);
        setCurrentMoveIndex(nextHistory.length-1);
    }

    return (
        <div className='tic-tac-toe-game'>
            <Board isXNext={isXNext} squares={currenState} onPlay={handlePlay} setStatus={setStatus}></Board>
        </div>
    )
}
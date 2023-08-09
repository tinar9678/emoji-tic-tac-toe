import React, { useState } from 'react';
import Board from './board';
import styles from './page.module.css'

export default function Game({setStatus}) {
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
    const currenState = history[currentMoveIndex];
    const isXNext = currentMoveIndex % 2 === 0; 

    console.log("currentmoveindex:" + currentMoveIndex)
    console.log(history)
    
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
        <div className={styles.board}>
            <Board isXNext={isXNext} squares={currenState} onPlay={handlePlay} setStatus={setStatus}></Board>
            <History history={history} setCurrentMoveIndex={setCurrentMoveIndex} className={styles.history}></History>
        </div>
    )
}

function History({history, setCurrentMoveIndex}) {
    const moves = history.map((state, index) => {
        const handleClick = () => {
            setCurrentMoveIndex(index);
            console.log(index);
        }
        const label = "Go back to move " + index;
        return (
            <li key={index}>
                <button onClick={handleClick}>{label}</button>
            </li>
        )
    })
    return (
        <div className={styles.history}>
            <h3>move history</h3>
            <ol> {moves} </ol>
        </div>
    )
}
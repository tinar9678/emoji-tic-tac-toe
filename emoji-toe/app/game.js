import React, { useState } from 'react';
import Board from './board';
import './game.css'

export default function Game() {
    const [currentSquares, setCurrentSquares] = useState(new Array(9).fill("x"));
    return (
        <div className='tic-tac-toe-game'>
            <Board squares={currentSquares}></Board>
        </div>
    )
}
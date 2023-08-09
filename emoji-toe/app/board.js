import { useState } from 'react'
import './board.css'

function Square({value, onSquareClick}) {
    return (
        <div className='square' onClick={onSquareClick}>
            {value}
        </div>
    )
}

export default function Board({isXNext, squares, onPlay}) {
    const onSquareClick = (index) => {
        // change the value of the square
        squares[index] = isXNext ? 'X' : 'O';
        // bubble up the squares to the game
        onPlay(squares);
    }

    return (
        <div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => onSquareClick(0)}></Square>
                <Square value={squares[1]} onSquareClick={() => onSquareClick(1)}></Square>
                <Square value={squares[2]} onSquareClick={() => onSquareClick(2)}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => onSquareClick(3)}></Square>
                <Square value={squares[4]} onSquareClick={() => onSquareClick(4)}></Square>
                <Square value={squares[5]} onSquareClick={() => onSquareClick(5)}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => onSquareClick(6)}></Square>
                <Square value={squares[7]} onSquareClick={() => onSquareClick(7)}></Square>
                <Square value={squares[8]} onSquareClick={() => onSquareClick(8)}></Square>
            </div>
        </div>
    )
}
import { useState } from 'react'
import Square from './square'
import './board.css'

export default function Board({squares}) {
    const onSquareClick = () => {

    }

    return (
        <div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[1]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[2]} onSquareClick={onSquareClick}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[1]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[2]} onSquareClick={onSquareClick}></Square>
            </div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[1]} onSquareClick={onSquareClick}></Square>
                <Square value={squares[2]} onSquareClick={onSquareClick}></Square>
            </div>
        </div>
    )
}
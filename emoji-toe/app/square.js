import React from "react";
import './board.css'

export default function Square({value, onSquareClick}) {
    return (
        <div className='square' onClick={onSquareClick}>
            {value}
        </div>
    )
}
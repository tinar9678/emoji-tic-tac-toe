import './board.css'

export default function Board({isXNext, squares, onPlay, setStatus}) {
    const onSquareClick = (index) => {
        const newSquares = [...squares];
        // don't do anything if user clicks a square with an emoji.
        if (newSquares[index]) return;
        // change the value of the square
        newSquares[index] = isXNext ? "🦄" : "🐙";
        // check if win condition
        const winner = isWinCondition(newSquares);
        if (winner) {
            setStatus("Winner: " + winner);
            return;
        }
        // bubble up the newSquares to the game
        onPlay(newSquares);
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

function Square({value, onSquareClick}) {
    return (
        <div className='square' onClick={onSquareClick}>
            {value}
        </div>
    )
}

function isWinCondition(squares) {
    // horizontal, vertical, diagonal
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    for (const [a, b, c] of winConditions) {
        if (squares[a] === squares[b] && squares[b] === squares[c] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
} 

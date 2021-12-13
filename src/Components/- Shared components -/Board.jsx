import React from 'react';
import '../../Styles/Board.css';

export function Board(
    { 
        currBoard,
        winner='',
        winnerLine,
        handleSquareClick=(s,i) => {return},
        gameNotActive=false,
    }) {
    
    const isWinnerSquare = i => winnerLine.includes(i);

    return (
        <div className={`board ${gameNotActive ? 'board-inactive' : ''}`}>
            {currBoard.map((square, i) =>        
                <button 
                    key={i}
                    className={`square ${isWinnerSquare(i) ? 'winner-square' : ''} ${square || winner ? 'filled' : ''}`}
                    onClick={() => handleSquareClick(square, i)}
                >
                    {square}
                </button>
            )}
        </div>
    );
}

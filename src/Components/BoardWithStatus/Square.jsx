import React from 'react';

export function Square({ squareValue, handleSquareClick, isWinnerSquare }) {

    return (
        <button 
            className={`square ${isWinnerSquare ? 'winner-square' : ''}`}
            onClick={handleSquareClick}
        >
            {squareValue}
        </button>
    );
}

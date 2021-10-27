import React from 'react';

export function Square({ squareValue, handleSquareClick, winnerSquare }) {

    return (
        <button 
            className={`square ${winnerSquare ? 'winner-square' : ''}`}
            onClick={handleSquareClick}
        >
            {squareValue}
        </button>
    );
}

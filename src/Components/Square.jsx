import React from 'react';

export function Square({ squareValue, handleSquareClick }) {

    return (
        <button 
            className='square'
            onClick={handleSquareClick}
        >
            {squareValue}
        </button>
    );
}

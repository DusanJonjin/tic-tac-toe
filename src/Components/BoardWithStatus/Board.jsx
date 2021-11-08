import React from 'react';
import { Square } from './Square';

export function Board({ currBoard, winner, winnerLine, handleSquareClick}) {

    const board = currBoard.map((v, i) => {
        const isWinnerSquare = winnerLine.includes(i);
        return (
            <Square 
                key={i}
                handleSquareClick={() => handleSquareClick(v, i)}
                squareValue={v}
                isWinnerSquare={isWinnerSquare}
            />
        );
    });

    return (
        <div className='board'>
            {board}
        </div>
    );
}

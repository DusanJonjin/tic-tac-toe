import React from 'react';
import '../../Styles/Board.css';

export function Board({ currBoard, winnerLine, handleSquareClick=(s,i) => {return}}) {
    
    const isWinnerSquare = i => winnerLine.includes(i);

    return (
        <div className='board'>
            {currBoard.map((square, i) =>        
                <button 
                    key={i}
                    className={`square ${isWinnerSquare(i) ? 'winner-square' : ''}`}
                    onClick={() => handleSquareClick(square, i)}
                >
                    {square}
                </button>
            )}
        </div>
    );
}

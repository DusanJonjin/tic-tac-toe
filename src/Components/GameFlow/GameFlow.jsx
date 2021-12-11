import React from 'react';
import { Board } from '../- Shared components -/Board';
import '../../Styles/GameFlow.css'

export function GameFlow({ boardHistory, jumpToMove, gameNotActive }) {

    const lastMoveIndex = (arr, i, board) => {
        if (i < 1) return [];
        const prevBoard = arr[i - 1];
        const newMoveIndex = board.reduce((acc, square, index) =>
            square !== prevBoard[index] ? [...acc, index] : acc, []
        );
        return newMoveIndex;
    };

    return (
        <section className='game-flow'>
            {!gameNotActive &&
                <ol id='moves-list'>
                    {boardHistory.map((board, i, arr) => 
                        <li key={i} className='move'>
                            <button onClick={() => jumpToMove(i)}>
                                {i ? `Go to move ${i}` : 'Go to game start'}
                            </button>
                            <Board 
                                currBoard={board}
                                winnerLine={lastMoveIndex(arr, i, board)}        
                            />
                        </li>
                    )}
                </ol>
            }
        </section>
    );
}

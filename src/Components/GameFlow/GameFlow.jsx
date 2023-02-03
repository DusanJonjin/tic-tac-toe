import React from 'react';
import { Board } from '../- Shared components -/Board';
import { findLastMoveIndex } from '../../Utilities/Game functions/findLastMoveIndex';
import '../../Styles/GameFlow.css'

export function GameFlow({ boardHistory, jumpToMove, gameNotActive }) {

    return (
        <section className='game-flow'>
            {!gameNotActive &&
                <ol id='moves-list'>
                    {boardHistory.map((board, i, arr) => 
                        <li key={i} className='move'>
                            <button onClick={() => jumpToMove(i)}>
                                {i ? `Go to move ${i}` : 'Go to start'}
                            </button>
                            <Board 
                                currBoard={board}
                                winnerLine={findLastMoveIndex(arr, i, board)}        
                            />
                        </li>
                    )}
                </ol>
            }
        </section>
    );
}

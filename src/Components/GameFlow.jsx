import React from 'react';
import '../Styles/GameFlow.css'

export function GameFlow({ boardHistory, jumpToMove }) {

    const movesHistory = boardHistory.map((board, i) => 
        <button key={i} onClick={() => jumpToMove(i)}>
            {i ? `Go to move ${i}` : 'Go to game start'}
        </button>
    );

    return (
        <section className='game-flow'>
            {movesHistory}
        </section>
    )
}

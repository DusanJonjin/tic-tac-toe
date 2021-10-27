import React from 'react';
import { Square } from './Square';
import '../Styles/BoardWithStatus.css';

export function BoardWithStatus({ currboard, handleSquareClick, playerSymbol }) {

    const board = currboard.map((v, i) =>
        <Square 
            key={i}
            handleSquareClick={() => handleSquareClick(v, i)}
            squareValue={v}
        />   
    );

    return (
        <section className='board-with-status'>
            <div className='board'>{board}</div>
            <p className='status'>Next player: {playerSymbol}</p>
        </section>
    )
}

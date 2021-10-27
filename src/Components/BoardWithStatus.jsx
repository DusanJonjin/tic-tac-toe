import React from 'react';
import { Square } from './Square';
import '../Styles/BoardWithStatus.css';

export function BoardWithStatus(props) {

    const { 
        currboard, 
        handleSquareClick, 
        playerSymbol,
        winner,
        winnerLine
    } = props;

    const board = currboard.map((v, i) => {
        const winnerSquare = winnerLine.includes(i);
        return (
            <Square 
                key={i}
                handleSquareClick={() => handleSquareClick(v, i)}
                squareValue={v}
                winnerSquare={winnerSquare}
            />
        );
    });

    const gameStatus = () => {
        if (!winner) return `Next player: ${playerSymbol}`
        if (winner === 'tie') return 'It\'s a tied game!';
        return `Player ${winner} wins!`
    }

    return (
        <section className='board-with-status'>
            <div className='board'>{board}</div>
            <p className='status'>{gameStatus()}</p>
        </section>
    )
}

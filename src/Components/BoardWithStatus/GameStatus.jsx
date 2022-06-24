import React from 'react';
import '../../Styles/GameStatus.css';

export function GameStatus({ winner, playerSymbol, gameNotActive}) {

    const gameStatus = () => {
        if (gameNotActive) return 'Press the Start button to play';
        if (!winner) return `Next player: `;
        if (winner === 'tie') return 'It\'s a tied game!';
        return `Player ${winner} wins!`
    };

    const status = gameStatus();

    return (
        <p className='game-status'>
            {status} {status.includes('Next') ? <span>{playerSymbol}</span> : ''}
        </p>
    );
}

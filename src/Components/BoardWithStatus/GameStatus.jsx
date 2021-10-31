import React from 'react';

export function GameStatus({ winner, playerSymbol}) {

    const gameStatus = () => {
        if (!winner) return `Next player: ${playerSymbol}`
        if (winner === 'tie') return 'It\'s a tied game!';
        return `Player ${winner} wins!`
    };

    return (
        <p>
            {gameStatus()}
        </p>
    );
}

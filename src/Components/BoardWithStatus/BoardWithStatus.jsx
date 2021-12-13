import React from 'react';
import { Board } from '../- Shared components -/Board';
import { GameStatus } from './GameStatus';
import '../../Styles/BoardWithStatus.css';

export function BoardWithStatus(props) {

    const {
        currBoard,
        winner,
        winnerLine,
        handleSquareClick,
        playerSymbol, 
        gameNotActive
    } = props;

    return (
        <section className={`board-with-status`}>
            <Board  
                currBoard={currBoard}
                winner={winner}
                winnerLine={winnerLine}
                handleSquareClick={handleSquareClick}
                gameNotActive={gameNotActive}
            />
            <GameStatus 
                winner={winner}
                playerSymbol={playerSymbol}
                gameNotActive={gameNotActive}
            />
        </section>
    );
}

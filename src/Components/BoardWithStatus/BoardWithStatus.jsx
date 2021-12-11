import React from 'react';
import { Board } from '../- Shared components -/Board';
import { GameStatus } from './GameStatus';
import '../../Styles/BoardWithStatus.css';

export function BoardWithStatus(props) {

    const {winner, playerSymbol, gameNotActive, ...boardProps} = props;

    return (
        <section className={`board-with-status`}>
            <Board  
                gameNotActive={gameNotActive} 
                {...boardProps}
            />
            <GameStatus 
                winner={winner}
                playerSymbol={playerSymbol}
                gameNotActive={gameNotActive}
            />
        </section>
    );
}

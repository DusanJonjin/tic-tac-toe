import React from 'react';
import { Board } from './Board';
import { GameStatus } from './GameStatus';
import '../../Styles/BoardWithStatus.css';

export function BoardWithStatus(props) {

    const {winner, playerSymbol, ...boardProps} = props;

    return (
        <section className={`board-with-status`}>
            <Board 
                winner={winner}
                {...boardProps} 
            />
            <GameStatus 
                winner={winner}
                playerSymbol={playerSymbol}
            />
        </section>
    );
}

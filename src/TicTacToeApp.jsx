import React, {useState, useEffect} from 'react';
import { Board } from './Components/Board';
import { GameFlow } from './Components/GameFlow';
 
export function TicTacToeApp() {

    const initialBoardHistory = [Array(9).fill(null)];

    const [boardHistory, setBoardHistory] = useState(initialBoardHistory);

    const [moveCount, setMoveCount] = useState(0);

    const symbol = {x: 'X', o: 'O'}


    return (
        <main className="app">
            <Board />
            <GameFlow />
        </main>
    );
}

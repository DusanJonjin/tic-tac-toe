import React, {useState, useEffect} from 'react';
import { BoardWithStatus } from './Components/BoardWithStatus';
import { GameFlow } from './Components/GameFlow';
import { gameWinner } from './gameFunctions';
import './Styles/TicTacToeApp.css'
 
export function TicTacToeApp() {

    const initialBoardHistory = [Array(9).fill(null)];

    const [boardHistory, setBoardHistory] = useState(initialBoardHistory);

    const [moveNumber, setMoveNumber] = useState(0);

    const symbol = {x: 'X', o: 'O'}

    const currentBoard = boardHistory[moveNumber];

    const { winner, winnerLine } = gameWinner(currentBoard);

    const playerSymbol = moveNumber % 2 === 0 ? symbol.x : symbol.o;

    const handleSquareClick = (squareValue, squareIndex) => {
        if (squareValue || winner) return;
        setBoardHistory(prevBoardHistory => {
            const currBoardHistory = prevBoardHistory.slice(0, moveNumber + 1);
            const currBoard = currBoardHistory[moveNumber];
            const newBoard = currBoard.map((v ,i) => i === squareIndex ? playerSymbol : v);
            return [...currBoardHistory, newBoard];
        });
        setMoveNumber(prevMoveNumber => prevMoveNumber + 1);
    }

    const jumpToMove = selectedMove => {
        setMoveNumber(selectedMove);
    }

    return (
        <main className="app">
            <BoardWithStatus 
                currboard={currentBoard}
                handleSquareClick={handleSquareClick}  
                playerSymbol={playerSymbol}
                winner={winner}
                winnerLine={winnerLine}           
            />
            <GameFlow 
                boardHistory={boardHistory}
                jumpToMove={jumpToMove}
            />
        </main>
    );
}

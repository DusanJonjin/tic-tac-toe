import React, { useState, useEffect, useReducer } from 'react';
import { Menu } from './Components/Menu/Menu';
import { ChooseSymbol } from './Components/Menu/ChooseSymbol';
import { ChooseDifficulty } from './Components/Menu/ChooseDifficulty';
import { BoardWithStatus } from './Components/BoardWithStatus/BoardWithStatus';
import { GameFlow } from './Components/GameFlow/GameFlow';
import { boardHistoryReducer, initialBoardHistory } from './Reducers/boardHistoryReducer';
import { setInitialBoardHistory, easyGame, mediumGame, impossibleGame, playerSquareClick } from './Reducers/boardHistoryActions';
import { player } from './Utilities/Fixtures/gameData';
import { gameWinner } from './Utilities/Game functions/winnerAndBestMove';
import './Styles/TicTacToeApp.css';
 
export function TicTacToeApp() {

    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState('easy');
    const [boardHistory, dispatch] = useReducer(boardHistoryReducer, initialBoardHistory);
    const [moveNumber, setMoveNumber] = useState(0);
    const [computer, setComputer] = useState({isPlaying: true, symbol: player.o});

    const currentBoard = boardHistory[moveNumber];
    const { winner, winnerLine } = gameWinner(currentBoard);

    const gameIsActive = gameStarted && !winner;
    const gameNotActive = !gameStarted && !winner;

    const playerSymbol = moveNumber % 2 === 0 ? player.x : player.o;

    const comp = computer.symbol;
    const human = comp === player.o ? player.x : player.o;

    const computerIsNext = computer.isPlaying && (comp === playerSymbol);


    const handleGameType = i => {
        // i can be 0 (1 player), or 1 (2 players)
        if (i && !computer.isPlaying || !i && computer.isPlaying) return;
        if (gameIsActive && computerIsNext) return;
        setComputer(prevComputer => ({...prevComputer, isPlaying: !i})); 
        setGameStarted(false);
        dispatch(setInitialBoardHistory());
        setMoveNumber(0);
    };

    const handleChooseSymbol = chosenSymbol => {
        if (chosenSymbol === human) return;
        if (gameIsActive && computerIsNext) return;
        const compSymbol = chosenSymbol === player.x ? player.o : player.x;
        setComputer(prevComputer => ({...prevComputer, symbol: compSymbol}));
        setGameStarted(false);
        dispatch(setInitialBoardHistory());
        setMoveNumber(0);
    };

    const handleChooseDifficulty = chosenDiff => {
        if (gameIsActive && computerIsNext) return;
        setDifficulty(chosenDiff);
        setGameStarted(false);
        dispatch(setInitialBoardHistory());
        setMoveNumber(0);
    };

    const handleGameStart = e => {
        e.preventDefault();
        if (gameIsActive && computerIsNext) return;
        setGameStarted(true);
        dispatch(setInitialBoardHistory());
        setMoveNumber(0);
    };

    const handleSquareClick = (squareValue, squareIndex) => {
        if (!gameStarted || squareValue || computerIsNext || winner) return;
        dispatch(playerSquareClick(moveNumber, playerSymbol, squareIndex));
        setMoveNumber(prevMoveNumber => prevMoveNumber + 1);
    };

    const jumpToMove = selectedMove => {
        setMoveNumber(selectedMove);
        setGameStarted(true);
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if (winner) setGameStarted(false);
        if (!gameStarted || !computerIsNext || winner || moveNumber > 8) return;
        const gameTimeout = setTimeout(() => {
            switch(difficulty) {
                case 'easy': dispatch(easyGame(moveNumber, comp));
                break;
                case 'medium': dispatch(mediumGame(moveNumber, comp, human));
                break;
                case 'impossible': dispatch(impossibleGame(moveNumber, comp, human));
                break;
                default: return
            }
            setMoveNumber(prevMoveNumber => prevMoveNumber + 1);           
        }, 650);
        return () => clearTimeout(gameTimeout);
    }, [winner, gameIsActive, computerIsNext]);

    return (
        <main className="app">
            <Menu 
                handleGameType={handleGameType}
                handleGameStart={handleGameStart}
                computerIsPlaying={computer.isPlaying}         
            >
                <ChooseSymbol 
                    handleChooseSymbol={handleChooseSymbol} 
                    humanSymbol={human}                   
                />
                <ChooseDifficulty handleChooseDifficulty={handleChooseDifficulty} />
            </Menu>
            <BoardWithStatus 
                currBoard={currentBoard}
                winner={winner}
                winnerLine={winnerLine}
                handleSquareClick={handleSquareClick}
                playerSymbol={playerSymbol}
                gameNotActive={gameNotActive}         
            />
            <GameFlow 
                boardHistory={boardHistory}
                jumpToMove={jumpToMove}
                gameNotActive={gameNotActive}
            />
        </main>
    );
}

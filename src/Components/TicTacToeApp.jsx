import React, {useState, useEffect} from 'react';
import { Menu } from './Menu/Menu';
import { ChooseSymbol } from './Menu/ChooseSymbol';
import { ChooseDifficulty } from './Menu/ChooseDifficulty';
import { BoardWithStatus } from './BoardWithStatus/BoardWithStatus';
import { GameFlow } from './GameFlow/GameFlow';
import { gameWinner, bestMove } from '../Utilities/gameFunctions';
import '../Styles/TicTacToeApp.css';
 
export function TicTacToeApp() {

    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState('easy');

    const initialBoardHistory = [Array(9).fill(null)];
    const [boardHistory, setBoardHistory] = useState(initialBoardHistory);
    const [moveNumber, setMoveNumber] = useState(0);

    const player = {x: 'X', o: 'O'};
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
        setBoardHistory(initialBoardHistory);
        setMoveNumber(0);
    };

    const handleChooseSymbol = chosenSymbol => {
        if (chosenSymbol === human) return;
        if (gameIsActive && computerIsNext) return;
        const compSymbol = chosenSymbol === player.x ? player.o : player.x;
        setComputer(prevComputer => ({...prevComputer, symbol: compSymbol}));
        setGameStarted(false);
        setBoardHistory(initialBoardHistory);
        setMoveNumber(0);
    };

    const handleChooseDifficulty = chosenDiff => {
        if (gameIsActive && computerIsNext) return;
        setDifficulty(chosenDiff);
        setGameStarted(false);
        setBoardHistory(initialBoardHistory);
        setMoveNumber(0);
    };

    const handleGameStart = e => {
        e.preventDefault();
        if (gameIsActive && computerIsNext) return;
        setGameStarted(true);
        setBoardHistory(initialBoardHistory);
        setMoveNumber(0);
    };

    const handleSquareClick = (squareValue, squareIndex) => {
        if (!gameStarted || squareValue || computerIsNext || winner) return;
        setBoardHistory(prevBoardHistory => {
            const currBoardHistory = prevBoardHistory.slice(0, moveNumber + 1);
            const currBoard = currBoardHistory[moveNumber];
            const newBoard = currBoard.map((v ,i) => i === squareIndex ? playerSymbol : v);
            return [...currBoardHistory, newBoard];
        });
        setMoveNumber(prevMoveNumber => prevMoveNumber + 1);
    };

    const jumpToMove = selectedMove => {
        setMoveNumber(selectedMove);
        setGameStarted(true);
        window.scrollTo(0, 0)
    }

    const getRandomNullIndex = board => {
        const boardNullIndexes = board.reduce((acc, v, i) => !v ? [...acc, i] : acc, []);
        return boardNullIndexes[Math.floor(Math.random() * boardNullIndexes.length)];
    };

    const easyGame = () => {
        setBoardHistory(prevBoardHistory => {
            const currBoardHistory = prevBoardHistory.slice(0, moveNumber + 1);
            const currBoard = currBoardHistory[moveNumber];
            const randomNullIndex = getRandomNullIndex(currBoard);
            const newBoard = currBoard.map((v, i) => i === randomNullIndex ? comp : v);
            return [...currBoardHistory, newBoard];
        })
    }

    const mediumGame = () => {
        setBoardHistory(prevBoardHistory => {
            const currBoardHistory = prevBoardHistory.slice(0, moveNumber + 1);
            const currBoard = [...currBoardHistory[moveNumber]];
            if (moveNumber > 5) {
                const randomNullIndex = getRandomNullIndex(currBoard);
                currBoard[randomNullIndex] = comp;
            }
            else bestMove(moveNumber, currBoard, comp, human);
            return [...currBoardHistory, currBoard];
        })
    }

    const impossibleGame = () => {
        setBoardHistory(prevBoardHistory => {
            const currBoardHistory = prevBoardHistory.slice(0, moveNumber + 1);
            const currBoard = [...currBoardHistory[moveNumber]];
            bestMove(moveNumber, currBoard, comp, human);
            return [...currBoardHistory, currBoard];
        });
    };

    useEffect(() => {
        if (winner) setGameStarted(false);
        const gameTimeout = setTimeout(() => {
            if (gameStarted) {
                if (winner || moveNumber > 8) return;
                if (computerIsNext) {
                    switch(difficulty) {
                        case 'easy': easyGame();
                        break;
                        case 'medium': mediumGame();
                        break;
                        case 'impossible': impossibleGame();
                        break;
                        default: return
                    }
                    setMoveNumber(prevMoveNumber => prevMoveNumber + 1);
                }
            }
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
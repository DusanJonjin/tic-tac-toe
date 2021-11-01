const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export const gameWinner = board => {
    const game = winnerLines.reduce((acc, winnerLine) => {
        const [a, b, c] = winnerLine;
        const isWinner = board[a] && board[a] === board[b] && board[a] === board[c];
        if (isWinner) return {winner: board[a], winnerLine};
        return acc;
    }, {winner: '', winnerLine: []});

    if (board.every(v => v) && !game.winner) return {winner: 'tie', winnerLine: []}

    else return game;
};


const winScore = {  
    human: -10,
    computer: 10,
    tie: 0
};

const miniMax = (board, depth, isMax, comp, human) => {
    const { winner } = gameWinner(board);
    if (winner) {
        if (winner === human) return winScore.human;
        if (winner === comp) return winScore.computer;
        return winScore.tie; 
    }
    if (isMax) {
        let bestScore = - Infinity;
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                board[i] = comp;
                let score = miniMax(board, depth + 1, false, comp, human);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    }
    else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                board[i] = human;
                let score = miniMax(board, depth + 1, true, comp, human);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
};

export const bestMove = (moveNumber, currBoard, comp, human) => {
    if (moveNumber < 1) {
        const safeMoves = currBoard.reduce((acc, v, i) => i !== 4 ? [...acc, i] : acc, []);
        const randomMove = safeMoves[Math.floor(Math.random() * safeMoves.length)];
        currBoard[randomMove] = comp;
    }
    else {
        let bestScore = - Infinity;
        let move;
        for (let i = 0; i < currBoard.length; i++) {
            if (!currBoard[i]) {
                currBoard[i] = comp;
                let score = miniMax(currBoard, 0, false, comp, human);
                currBoard[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        currBoard[move] = comp;
    }
};
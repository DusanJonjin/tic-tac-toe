export const winnerLines = [
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
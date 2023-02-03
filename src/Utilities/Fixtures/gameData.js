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

const initialBoardHistory = [Array(9).fill(null)];

const player = {x: 'X', o: 'O'};

const gameTypes = ['1 player', '2 players'];

const symbols = ['X', 'O'];

const difficulties = ['easy', 'medium', 'impossible'];

export { 
    winnerLines,
    initialBoardHistory,
    player,
    gameTypes,
    symbols,
    difficulties,
};
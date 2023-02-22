const getRandomNullIndex = board => {
    const boardNullIndexes = board.reduce((acc, v, i) => !v ? [...acc, i] : acc, []);
    return boardNullIndexes[Math.floor(Math.random() * boardNullIndexes.length)];
};

const findLastMoveIndex = (arr, i, board) => {
    if (i < 1) return [];
    const prevBoard = arr[i - 1];
    const newMoveIndex = board.reduce((acc, square, index) =>
        square !== prevBoard[index] ? [...acc, index] : acc, []
    );
    return newMoveIndex;
};

export { 
    getRandomNullIndex, 
    findLastMoveIndex 
};
export const findLastMoveIndex = (arr, i, board) => {
    if (i < 1) return [];
    const prevBoard = arr[i - 1];
    const newMoveIndex = board.reduce((acc, square, index) =>
        square !== prevBoard[index] ? [...acc, index] : acc, []
    );
    return newMoveIndex;
};
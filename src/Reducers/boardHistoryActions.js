export const setInitialBoardHistory = () => ({
    type: "set_initial_board_history",
});

export const playerSquareClick = (moveNumber, playerSymbol, squareIndex) => ({
    type: "player_square_click",
    moveNumber,
    playerSymbol,
    squareIndex,
})

export const easyGame = (moveNumber, comp) => ({
    type: "easy_game",
    moveNumber,
    comp,
});

export const mediumGame = (moveNumber, comp, human) => ({
    type: "medium_game",
    moveNumber,
    comp,
    human,
});

export const impossibleGame = (moveNumber, comp, human) => ({
    type: "impossible_game",
    moveNumber,
    comp,
    human,
});
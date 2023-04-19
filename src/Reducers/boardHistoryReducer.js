import { getRandomNullIndex } from "../Utilities/Game functions/indexOperations";
import { bestMove } from "../Utilities/Game functions/winnerAndBestMove";

export const initialBoardHistory = [Array(9).fill(null)];

export const boardHistoryReducer = (state, action) => {
    const { type, moveNumber, playerSymbol, squareIndex, comp, human } = action;

    switch (type) {
        case "set_initial_board_history": 
            const newState = initialBoardHistory;
            return newState;

        case "player_square_click":
            const currBoardHistory = state.slice(0, moveNumber + 1);
            const currBoard = currBoardHistory[moveNumber];
            const newBoard = currBoard.map((v ,i) => i === squareIndex ? playerSymbol : v);
            return [...currBoardHistory, newBoard];

        case "easy_game":
            const currEasyHistory = state.slice(0, moveNumber + 1);
            const currEasyBoard = currEasyHistory[moveNumber];
            const easyRandomNullIndex = getRandomNullIndex(currEasyBoard);
            const newEasyBoard = currEasyBoard.map((v, i) => i === easyRandomNullIndex ? comp : v);
            return [...currEasyHistory, newEasyBoard];

        case "medium_game":
            const currMediumHistory = state.slice(0, moveNumber + 1);
            const currMediumBoard = [...currMediumHistory[moveNumber]];
            if (moveNumber > 5) {
                const mediumRandomNullIndex = getRandomNullIndex(currMediumBoard);
                currMediumBoard[mediumRandomNullIndex] = comp;
            }
            else bestMove(moveNumber, currMediumBoard, comp, human);
            return [...currMediumHistory, currMediumBoard];

        case "impossible_game":
            const currHardHistory = state.slice(0, moveNumber + 1);
            const currHardBoard = [...currHardHistory[moveNumber]];
            bestMove(moveNumber, currHardBoard, comp, human);
            return [...currHardHistory, currHardBoard];

        default: return state;
    }
};

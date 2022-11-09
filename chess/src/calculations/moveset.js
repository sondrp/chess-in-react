
/* 
 * This function provides the tools to calculate which squares are covered by some piece on the board. Each piece can move differently than others. 
 * Some pieces are directional, like the rook, queen and bishop. These have a different end condition than knight or king. 
 * The undirectional pieces will include one move in each direction (end condition is stop after one move),
 * while the directional pieces will continue to move in one direction until they have met another piece (their end condition is finding a square that is not empty)
 * Directions will start upwards, and move clockwise. dx = 0 and dy = 1 describes upwards movement
 * 
 * @returns [numberOfDirections, dx, dy, endCondition]
*/
export default function getMoveset(piece) {
    const directional = (board, x, y) => board[y * 8 + x] !== null
    const undirectional = (board, x, y) => false

    if (piece.toUpperCase() === "R") {
        return [4, [0, 1, 0, -1], [1, 0, -1, 0], directional]
    }
    if (piece.toUpperCase() === "B") {
        return [4, [1, 1, -1, -1], [1, -1, -1, 1], directional]
    }
    if (piece.toUpperCase() === "Q") {
        return [8, [0, 1, 1, 1, 0, -1, -1, -1], [1, 1, 0, -1, -1, -1, 0, 1], directional]
    }
    if (piece.toUpperCase() === "N") {
        return [8, [1, 2, 2, 1, -1, -2, -2, -1], [2, 1, -1, -2, -2, -1, 1, 2], undirectional]
    }
    if (piece === "P") {
        return [2, [1, -1] [1, 1], undirectional]
    }
    if (piece === "p") {
        return [2, [1, -1] [-1, -1], undirectional]
    }
    if (piece.toUpperCase() === "K") {
        return [8, [0, 1, 1, 1, 0, -1, -1, -1], [1, 1, 0, -1, -1, -1, 0, 1], undirectional]
    }
}
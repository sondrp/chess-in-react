/* 
 * This function provides the tools to calculate which squares are covered by some piece on the board. Each piece can move differently than others. 
 * Some pieces are directional, like the rook, queen and bishop. These have a different end condition than knight or king. 
 * The undirectional pieces will include one move in each direction (end condition is stop after one move),
 * while the directional pieces will continue to move in one direction until they have met another piece (their end condition is finding a square that is not empty)
 * directions is an array of number pairs, specifying direction like a vector
 * 
 * Maybe easier todo with some system like polar coordinates?
 * 
 * @returns [numberOfDirections, directions, endCondition]
*/
export default function getMoveset(piece) {
    if (!piece) {
        console.log("non piece clicked")
        return
    }

    /* Relative coordinates for all 8 surrounding squares */
    const d = {
        up: [0, -1],
        upleft: [1, -1],
        left: [1, 0],
        downleft: [1, 1],
        down: [0, 1],
        downright: [-1, 1],
        right: [-1, 0],
        upright: [-1, -1]
    }

    const directional = (board, x, y) => board[y * 8 + x] !== null
    const undirectional = (board, x, y) => false

    if (piece.toUpperCase() === "R") {
        return [4, [d.up, d.right, d.down, d.left], directional]
    }
    if (piece.toUpperCase() === "B") {
        return [4, [d.upright, d.downright, d.downleft, d.upleft], directional]
    }
    if (piece.toUpperCase() === "Q") {
        return [8, [d.up, d.upright, d.right, d.downright, d.down, d.downleft, d.left, d.upleft], directional]
    }
    if (piece.toUpperCase() === "N") {
        return [8, [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]], undirectional]
    }
    if (piece === "P") {
        return [2, [[1, -1], [-1, -1]], undirectional]
    }
    if (piece === "p") {
        return [2, [[1, 1], [-1, 1]], undirectional]
    }
    if (piece.toUpperCase() === "K") {
        return [8, [d.up, d.upright, d.right, d.downright, d.down, d.downleft, d.left, d.upleft], undirectional]
    }
}
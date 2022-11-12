
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

/* 
Will give you the information necessary to calculate the squares covered by a piece.

It returns an array of two dimentional vectors, indicating the direction the piece moves. Some piece will halt: only move one square in each direction.
Pieces that halt are knight, king and pawn

Some pieces do not halt, and continue in one direction until they meet another piece, or the edge of the board.
Pieces that do not halt are rook, bishop, queen.
Note: to calculate cover, the first square in one direction occupied by another piece should be included in the cover.

returns: [directions, halt]

*/
export default function getMoveset(piece) {

    if (piece.toUpperCase() === "P") {
        const forward = piece === piece.toUpperCase() ? -1 : 1
        return [[[1, forward], [-1, forward]], true]
    }

    if (piece.toUpperCase() === "R") {
        return [[d.up, d.right, d.down, d.left], false]
    }
    if (piece.toUpperCase() === "B") {
        return [[d.upright, d.downright, d.downleft, d.upleft], false]
    }
    if (piece.toUpperCase() === "N") {
        return [[[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]], true]
    }
    if (piece.toUpperCase() === "Q" || piece.toUpperCase() === "K") {
        const isKing = piece.toUpperCase() === "K"
        return [[d.up, d.upright, d.right, d.downright, d.down, d.downleft, d.left, d.upleft], isKing]
    }
}
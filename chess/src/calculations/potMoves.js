import calculateCover from 'coverCalculations'

function friend(boardarray, piece, index) {
    otherPiece = boardarray[index]
    if (!otherPiece) {
        return false
    }
    return (piece === piece.toUppercase()) === (otherPiece === otherPiece.toUppercase())
}


export default function calculatePotMoves(gamestate, boardarray, index) {
    const piece = boardarray[index]

    let moves = calculateCover(boardarray, index)

    moves = moves.filter(move => !friend(boardarray, piece, move))

    return moves
}
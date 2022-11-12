import wouldBeCheck from "./checkChecker.js"
import calculateCover from "./coverCalculations.js"
import removeFriendlyPieces from "./removeFriendlyPieces.js"
import addSpecialMoves from "./addSpecialMoves.js"




/* Calculates all moves that a piece can legally move to, given the index of the piece */
export default function calculatePotMoves(gamestate, boardarray, index) {
    const piece = boardarray[index]
    
    // First step in potmoves is to check if there is a piece on the square
    if (!piece) {
        return []
    }
    
    const pieceIsWhite = piece === piece.toUpperCase()
    // Second step is to check if the piece is in turn (meaning it's a white piece on whites turn or other way around)
    if (gamestate.isWhitePlaying !== pieceIsWhite) {
        return []
    }

    // Now it is confirmed that there is a piece in turn on index.
    // Step 3 is figuring out where it can go.
    // This is is done through several substeps.
    // substep 1: calculate cover
    let cover = calculateCover(boardarray, index)


    // substep 2: add special moves (pawn moves, castle, en passant) TODO : add checks for castle and en passant
    let moves = addSpecialMoves(boardarray, cover, index)


    // substep 3: remove all friendly pieces (piece can never move to a square occupied by a friend)
    moves = removeFriendlyPieces(boardarray, index, moves)

    // substep 4: remove all moves that put your own king in check :(  
    let potMoves = []
    for (let moveTo of moves) {
        if (!wouldBeCheck(boardarray, index, moveTo, pieceIsWhite)) {
            potMoves.push(moveTo)
        }
    }
    return potMoves;
}
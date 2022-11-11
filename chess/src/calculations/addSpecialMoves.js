const secondRank = [48, 49, 50, 51, 52, 53, 54, 55]
const seventhRank = [8, 9, 10, 11, 12, 13, 14, 15]


/* This adds moves like forward moves of a pawn, castle, and en passant */
/* TODO : add castle and en passant */
export default function addSpecialMoves(boardarray, cover, index) {
    const piece = boardarray[index]
    const isWhite = piece === piece.toUpperCase()
    
    
    if (piece.toUpperCase() === "P") {
        let moves = []


        const oneMove = isWhite ? -8 : 8 
        const startRank = isWhite ? secondRank : seventhRank

        for (let coveredSquare of cover) {
            if (boardarray[coveredSquare] && (boardarray[coveredSquare] === boardarray[coveredSquare].toUpperCase()) !== isWhite) {
                moves.push(coveredSquare)
            }

        }

        // remove existing moves if there is no piece to capture (pawns can't move to the squares they cover otherwise)

        /* we assume a pawn can always potentially move one square (pawn will never be on the final row)
        Add square if it is empty*/ 
        if (!boardarray[index + oneMove]) {
            moves.push(index + oneMove)

            // Add two jump forward if pawn on startrow and square is empty
            if (startRank.includes(index) && !boardarray[index + 2*oneMove]) {
                moves.push(index + 2*oneMove)
            }
        } 
        cover = moves
    }
    return cover
}
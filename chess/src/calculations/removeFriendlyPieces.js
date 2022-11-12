
export default function removeFriendlyPieces(boardarray, index, cover) {
    const piece = boardarray[index]
    const isWhite = piece === piece.toUpperCase()
    let moves = []

    // include all moves that are either empty, or have a piece with the same case as our main piece
    for (const i of cover) {
        let enemy = boardarray[i]
        if (!enemy || (enemy === enemy.toUpperCase()) !== isWhite) {
            moves.push(i)
        }
    }
    return moves
}
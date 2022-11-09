
export default function getPieceRepresentation(piece) {
    if (piece === "P") return "♙"
    if (piece === "p") return "♟"
    if (piece === "R") return "♖"
    if (piece === "r") return "♜"
    if (piece === "B") return "♗"
    if (piece === "b") return "♝"
    if (piece === "N") return "♘"
    if (piece === "n") return "♞"
    if (piece === "K") return "♔"
    if (piece === "k") return "♚"
    if (piece === "Q") return "♕"
    if (piece === "q") return "♛"
}
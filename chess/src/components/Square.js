

/* 
Needs to conditionally render a dot!!!!! Whenever it is possible to move to the square, or king is in check
*/
function squareColor(i, circle) {
    if (circle) {
        return "green"
    }
    const column = i % 8
    const row = Math.floor(i / 8)
    return column % 2 === row % 2 ? "white" : "brown"
}
function getPiece(piece) {
    if (piece === null) return null
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

/* Props are text and onClick function */
export default function Square(props) {

    return (
        <div 
        className="square" 
        style={{backgroundColor: squareColor(props.info.index, props.info.circle)}}
        onClick={(props.info.handleClick)}>
            {getPiece(props.info.text)}
        </div>
    )

}
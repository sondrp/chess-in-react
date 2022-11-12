import calculatePotMoves from "./potMoves.js"

export default function updateSquaresWhenClicked(gamestate, squares, index) {
    let potMoves = gamestate.potMoves
    const boardarray = squares.map(square => square.text)


    if (!potMoves.includes(index)) { // CALCULATE POTMOVES


        potMoves = calculatePotMoves(gamestate, boardarray, index)


        gamestate.selectedSquare = index


        // Find all the moves the piece can move to
        //const potMoves = calculatePotMoves(squares.map(square => square.text), index)

        // Change the status of squares that can be moved to
        //squares.map((square, key) => ({...square, circle: potMoves.includes(key) ? true : false})) 

        // return squares, same as when it came in, except the squares that can be moved to are now circle : true
        //console.log(potMoves)


    } else {
        // In this case, the move is legal to do. Now we update the gamearray and gamestate to complete the move

        const moveFrom = gamestate.selectedSquare
        gamestate.isWhitePlaying = !gamestate.isWhitePlaying
        potMoves = []

        const movingPiece = boardarray[moveFrom]
        boardarray[moveFrom] = null
        boardarray[index] = movingPiece
        

    }


    gamestate.potMoves = potMoves

    squares = squares.map(square => (
        {
            ...square,
            text: boardarray[square.index],
            circle: potMoves.includes(square.index) ? true : false
        }
    ))
    return [gamestate, squares]
}
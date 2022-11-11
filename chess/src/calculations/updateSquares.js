import calculatePotMoves from "./potMoves.js"

export default function updateSquaresWhenClicked(squares, index) {
    const indexesOfLegalMoves = [] // ASSUME NO PREVIOUS CALCULATIONS TODO : FIX


    if (!indexesOfLegalMoves.includes(index)) { // CALCULATE POTMOVES


        const boardarray = squares.map(square => square.text)
        const potMoves = calculatePotMoves(boardarray, index)

        // Find all the moves the piece can move to
        //const potMoves = calculatePotMoves(squares.map(square => square.text), index)

        // Change the status of squares that can be moved to
        //squares.map((square, key) => ({...square, circle: potMoves.includes(key) ? true : false})) 

        // return squares, same as when it came in, except the squares that can be moved to are now circle : true
        //console.log(potMoves)



        return squares
    }
}
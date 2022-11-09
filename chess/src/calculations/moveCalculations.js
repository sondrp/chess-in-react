

// This takes a board and an index as input, and returns a javascript object with changes to make
/* 
changes is an array of more objects, each with an index: text to place

example:

{changes: [
    {0: none},
    {63: "♕"}
]}

This is what happens when the white queen moves from the top left corner to the bottom right corner


*/

import potMoves from "./potMoves"

export default function calculateMoves(gamestate, boardarray, index) {
    let changes = []
    const piece = boardarray[index]

    // If no 
    if (!piece) {
        return changes
    }
    const pieceColour = piece === piece.toUpperCase() ? "white" : "black"

    if (pieceColour === gamestate.playerTurn) {
        
        // PLAYER CLICKED ON THEIR OWN PIECE: we return all the legal moves
        return potMoves(gamestate, boardarray, index)


    } else {

        // CHECK IF CLICKED SQUARE IS ONE OF THE POTMOVES


    }


    // At this point we have confirmed that the piece selected is not an empty square, and that the piece belongs to the player that is supposed to move





}
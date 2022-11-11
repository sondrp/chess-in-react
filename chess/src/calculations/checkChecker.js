import calculateCover from "./coverCalculations.js"

/* Unreadable: maybe. It finds the index of the king of specified colour.
checks first if piece is on square. Then checks if piece is a king (any colour). Then checks if it is in the correct colour */
function getKingIndex(boardarray, isWhite) {
    for (let i = 0; i < boardarray.length; i++) {
        if (boardarray[i] && boardarray[i].toUpperCase() === "K" && (boardarray[i] === boardarray[i].toUpperCase()) === isWhite) {
            return i
        }
    }
}


/* Given a board and a colour, this will return true if the king is in check, false otherwise */
function isThisCheck(board, isWhite) {
    const kingIndex = getKingIndex(board, isWhite)

    for (let i = 0; i < board.length; i++) {

        // 1. Find every enemy piece. Checks if piece on square && piece is different colour
        if (board[i] && (board[i] === board[i].toUpperCase()) !== isWhite) {

            let cover = calculateCover(board, i)
            if (cover.includes(kingIndex)) {
                return true                                     // returns true if the index of the king is found in the cover of the enemy
            }
        }        
    }
    return false
}

/* Input is the board, where piece moves and what colour it is 
Currently we create a copy each time, which is not necessary. It would be possible to do the move, then revert it
But that takes work and I don't want to*/
export default function wouldBeCheck(boardarray, moveFrom, moveTo, isWhite) {
    const boardCopy = [...boardarray]

    const movingPiece = boardCopy[moveFrom]
    boardCopy[moveFrom] = null
    boardCopy[moveTo] = movingPiece

    return isThisCheck(boardCopy, isWhite)
}


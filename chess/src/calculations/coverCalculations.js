
import getMoveset from "./moveset"

function onTheBoard(x, y) {
    return -1 < x && x < 8 && -1 < y && y < 8
}


export default function calculateCover(boardarray, index) {
    const piece = boardarray[index]

    const [directions, halt] = getMoveset(piece)

    let cover = []
    let x, y

    for (let [dx, dy] of directions) {
        x = index % 8
        y = Math.floor(index / 8)
        
        do {
            x += dx
            y += dy
            
            if (!onTheBoard(x, y)) break        // break if the square is off board

            cover.push(y * 8 + x)               // the actual coordinate


        } while (!halt && !boardarray[y*8+x])   // Two conditions need to be met to continue: piece does not halt, and the current square is not occupied 
    }

}
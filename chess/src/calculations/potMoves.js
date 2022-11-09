
export default function potMoves(gamestate, boardarray, index) {
    let legalMoves = []
    [numberOfDirections, dx, dy, endCondition] = getMoveset(piece)
    let x
    let y


    for (let i = 0; i < numberOfDirections; i++) {
        x = index % 8
        y = Math.floor(index / 8)
        
        do {
            x += dx[i]
            y += dy[i]

            if (outsideBoard(x, y)) {
                break
            }
            legalMoves.push(y * 8 + x)

        } while (!endcondition(x, y))
    }
    


}



    /* moveset can look like (for rook): 


    
    
    
    
    */

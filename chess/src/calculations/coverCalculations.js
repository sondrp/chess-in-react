import getMoveset from './moveset.js';


function legalSquare(x, y) {
    return -1 < x && x < 8 && -1 < y && y < 8
}

/*  */
export default function calculateCover(boardarray, index) {
    const piece = boardarray[index]

    const [numberOfDirections, directions, doContinue] = getMoveset(piece)

    let cover = []
    let x, y, dx, dy


    for (let i = 0; i < numberOfDirections; i++) {
        x = index % 8
        y = Math.floor(index / 8);
        [dx, dy] = directions[i]


        do {
            x += dx
            y += dy
            if (!legalSquare(x, y)) break

            cover.push(y * 8 + x)
        } while (doContinue(boardarray, x, y))
    }
    return cover
}
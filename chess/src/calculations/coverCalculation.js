import getMoveset from 'moveset';


function legalSquare(x, y) {
    return -1 < x && x < 8 && -1 < y && y < 8
}

export default function calculateCover(boardArray, index) {
    const piece = boardArray[index]

    const [numberOfDirections, dx, dy, doContinue] = getMoveset(piece)

    let cover = []
    let x
    let y

    for (let i = 0; i < numberOfDirections; i++) {
        x = i % 8
        y = Math.floor(i / 8)

        do {
            x += dx[i]
            y += dy[i]
            if (!legalSquare(x, y)) break

            cover.push(y * 8 + x)
        } while (doContinue(boardArray, x, y))
    }
    return cover
}

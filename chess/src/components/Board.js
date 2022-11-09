import React from 'react'
import Square from "./Square"
/* 
It seems like it is best to define state of the game here, and also give the function to each 

function toggle(id) {
    setBoxes(prevBoxes => prevBoxes.map(box => box.id !== id ? box : {...box, on : !box.on}))
}

*/
/* This function might have to be moved into Board, and then trigger setSquares when that is necessary */


/* 
Board object could maybe be like {
    0: "R",
    1: null
}

because then it is really easy to update


*/



export default function Board(props) {
    const [boardArray, setBoardArray] = React.useState(props.array);
    const [gamestate, setGameState] = React.useState(props.gamestate)
    const squareElements = boardArray.map((text, key) => <Square key={key} index={key} text={text} circle={true} handleClick={() => handleClick(gamestate, boardArray, key)}/>)

    function handleClick(gamestate, boardArray, index) {
        setBoardArray(prev => prev.map((square, i) => i === index ? null : square))
    }

    return (
        <div className="board">
            {squareElements}
        </div>
    )
}
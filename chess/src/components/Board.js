import React from 'react'
import updateSquaresWhenClicked from '../calculations/updateSquares';
import Square from "./Square"


/* Recieves prop with game state and an array of square objects. Both of these are stored as state. The square objects are mapped to make square elements to display. 
Each square is given a key(index), a handleclick, and the rest(info: index, text, circle)

*/
export default function Board(props) {
    const [boardArray, setBoardArray] = React.useState(props.array);
    let gamestate = props.gamestate
    
    function handleClick(gamestate, boardArray, index) {
        [gamestate, boardArray] = updateSquaresWhenClicked(gamestate, boardArray, index)
        console.log(gamestate)

        setBoardArray(boardArray)
    }

    const squareElements = boardArray.map(s => <Square key={s.index} info={s} handleClick={() => handleClick(gamestate, boardArray, s.index)}/>)

    return (
        <div className="board">
            {squareElements}
        </div>
    )
}
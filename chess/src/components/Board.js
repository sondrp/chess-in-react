import React from 'react'
import Square from "./Square"
/* 
It seems like it is best to define state of the game here, and also give the function to each 


*/

function handleClick(boardArray, index) {
    console.log(boardArray[index])
}



export default function Board(props) {
    const boardArray = props.array;
    const [squares, setSquares] = React.useState(boardArray.map((text, key) => <Square key={key} index={key} text={text} handleClick={() => handleClick(boardArray, key)}/>))

    console.log("board was rendered")
    return (
        <div className="board">
            {squares}
        </div>
    )
}
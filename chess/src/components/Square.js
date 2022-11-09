

/* 
Needs to conditionally render a dot!!!!! Whenever it is possible to move to the square, or king is in check


*/
function squareColor(i) {
    const column = i % 8
    const row = Math.floor(i / 8)
    return column % 2 === row % 2 ? "white" : "brown"
}

/* Props are text and onClick function */
export default function Square(props) {

    return (
        <div 
        className="square" 
        style={{backgroundColor: squareColor(props.index)}}
        onClick={props.handleClick}>
            {props.text}
        </div>
    )

}
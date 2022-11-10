

export default function defaultBoard() {
    const boardArray = ["r","n","b","q","k","b","n","r", "p","p","p","p","p","p","p","p",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"P","P","P","P","P","P","P","P","R","N","B","Q","K","B","N","R"]
    return boardArray.map((text, key) => ({
        index: key,
        text: text,
        circle: false
    }))
}
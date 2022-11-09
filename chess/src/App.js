import './App.css';
import Board from './components/Board';


function App() {

  const gameState = {
    playerTurn: "white",
  }

  const boardArray = ["r","n","b","q","k","b","n","r", "p","p","p","p","p","p","p","p",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"P","P","P","P","P","P","P","P","R","N","B","Q","K","B","N","R"]

  console.log("app rendered")
  return (
    <div >
      <Board gamestate={gameState} array={boardArray} />
    </div>
  );
}

export default App;

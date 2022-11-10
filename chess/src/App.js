import './App.css';
import Board from './components/Board';
import defaultBoard from './data/defaultBoard';


function App() {

  const gameState = {
    playerTurn: "white",
  }
  console.log("app rendered")
  return (
    <div >
      <Board gamestate={gameState} array={defaultBoard()} />
    </div>
  );
}

export default App;

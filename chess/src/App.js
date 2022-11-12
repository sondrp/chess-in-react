import './App.css';
import Board from './components/Board';
import defaultBoard from './data/defaultBoard';


function App() {

  const gamestate = {
    isWhitePlaying: true,
    potMoves: [],
    selectedSquare: null 
  }
  console.log("app rendered")
  return (
    <div >
      <Board gamestate={gamestate} array={defaultBoard()} />
    </div>
  );
}

export default App;

import './App.css';
import Board from './components/Board';
import getDefaultBoard from './components/DefaultBoardSetup'

function squareColor(i) {
  const column = i % 8
  const row = Math.floor(i / 8)
  return column % 2 === row % 2 ? "white" : "brown"
}

function App() {

  const squares = getDefaultBoard()
  const squareElements = squares.map((text, key) => (
    <div 
      className="square" 
      key={key} 
      onClick={() => console.log(key)}
      style={{backgroundColor: squareColor(key)}}
    >
    {text}
    </div>)
  );


  return (
    <div >
      <Board squares={squareElements} />
    </div>
  );
}

export default App;

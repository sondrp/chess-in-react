import './App.css';
import Board from './components/Board';
import getDefaultBoard from './components/DefaultBoardSetup'


function App() {
  return (
    <div >
      <Board array={getDefaultBoard()} />
    </div>
  );
}

export default App;

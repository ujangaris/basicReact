import logo from './logo.svg';
import './App.css';

function Greeting(){
  return <h1>Halo Nama</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting/>
      </header>
    </div>
  );
}

export default App;

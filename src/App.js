import logo from './logo.svg';
import './App.css';

function Greeting(props){
  return <h1>Halo {props.name}</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Ujang"/>
        <Greeting name="Aris"/>
        <Greeting name="Danu"/>
      </header>
    </div>
  );
}

export default App;

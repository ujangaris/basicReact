import logo from './logo.svg';
import './App.css';

//Komponent - Properties
function Biodata(props){
  return <span>umurnya{props.age} </span>
}

function Greeting(props){
  return <h1>Halo {props.name} - <Biodata age={props.age} /> </h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Ujang" age="25" />
        <Greeting name="Aris" age="20"/>
        <Greeting name="Danu" age="22"/>
      </header>
    </div>
  );
}

export default App;

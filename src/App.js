import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//Handle event
class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatus: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }
  render(){
    return(
      <button onClick={this.handleClick} >
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kodisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle />
      </header>
    </div>
  );
}

export default App;

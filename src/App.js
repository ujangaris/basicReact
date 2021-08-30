import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Handle event
function Clicker(){

  function handleClick(e){
    alert('berhasil mengclick');
    e.preventDefault();
  }

  return(
    <a href="#" onClick={handleClick}>Klik disini bro</a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Clicker />
      </header>
    </div>
  );
}

export default App;

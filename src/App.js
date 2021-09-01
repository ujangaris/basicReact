import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <p>Kontent Biasa / Kontent Utama</p>
        <Warning/>
      </div>
    );
  }
}

function Welcome(){
  return (
    <Notification>
      <h1>Selamat Datang!</h1>
      <p>Selamat bergabung!!</p>
    </Notification>
  )
}

function Warning(){
  return (
    <Notification>
      <h1>Jangan lupa bayar tagihannya!</h1>
    </Notification>
  )
}

function Notification(props){
  return(
    <div className="notification">
      {props.children}
    </div>
  )
}

export default App;

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App" style={ estilo }>
        <input type="text" />
        <button>
          Click me!
        </button>
        <h1>Teste</h1>
      </div>
    )
  }
}

const estilo = {
  paddingTop: "100px"
}
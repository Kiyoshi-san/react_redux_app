import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "./actions";
import "./App.css";

class App extends Component {
  state = {
    inputValue: ""
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  
  render() {
    const {
      clickButton,
      newValue 
    } = this.props;

    const { inputValue } = this.state;
    
    return (
      <div className="App" style={ estilo }>
        <input type="text"
          onChange={this.inputChange}
          type="text"
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const estilo = {
  paddingTop: "100px"
}

// O método mapStateToProps transforma um trecho do estado da Store em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (App);
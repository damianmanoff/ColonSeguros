import React, { Component } from 'react';

class DNA extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  handleChange(event) {
    let validChars = ["C", "G", "T", "A"]
    let value = event.target.value.toUpperCase();
    if (value.length > 0){
      if (validChars.indexOf(value[value.length - 1]) > -1){
        this.setState({value: value});
      }
    }
  }

  handleClick(event) {
    this.props.insertDNA(this.state);
    event.preventDefault();
    this.setState({value: ""});
  }

  render() {
    return (
      <form >
        <label>
          Ingrese la cadena de ADN:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleClick}>Ingresar </button>
      </form>
    );
  }
}

export default DNA;

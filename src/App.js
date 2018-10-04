import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './App.css';
import DNA from './DNA';
import DNAChain from './DNAChain';
import MutantCheck from './MutantCheck';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {value : [], dnaFull: false}
      this.insertDNA  = this.insertDNA.bind(this);
    }

    

    insertDNA(dna) {
        this.setState(previousState => {
            if (previousState.value.length > 0 ){
                if (previousState.value[0].length != dna.value.length){
                    alert("El tamaño de la cadena de ADN no concuerda con las ingresadas previamente")
                    return false;
                }
                if (previousState.value.length >= dna.value.length){
                    this.state["dnaFull"] = true;
                    alert("Ya se ingresaron todas las cadenas de ADN")
                    return false;
                }
            }
            previousState.value.push(dna.value)
            if (previousState.value.length == dna.value.length){
                this.state["dnaFull"] = true;
            }
        return { value:  previousState.value };
      });
    }

    render() {
      var dnas = this.state["value"];
      var dnaFull = this.state["dnaFull"];

      return (
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <DNA insertDNA={this.insertDNA}/>
            <DNAChain dnaLists={dnas}/>
            <MutantCheck showMe={dnaFull} dna={dnas}/>
          </header>
        </div>
      );
    }
}

export default App;

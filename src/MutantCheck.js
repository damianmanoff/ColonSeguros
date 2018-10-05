import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MutantCheck extends Component {

    constructor(props) {
        super(props);
        this.handleClick  = this.handleClick.bind(this);
        this.isMutant  = this.isMutant.bind(this);
    }

  	

    isMutant(url) {
        var data = {
            "dna": this.props.dna
        }
        console.log(data);
        fetch( url + '/mutant/', {
           method: 'post',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(data)
        }).then(function(mutant){
            if (mutant.status == 403){
                return alert("Es Humano")
            }
            if (mutant.status == 200){
                return alert("Es Mutante")
            }
            return "Ni se sabe que es";
        }).catch(function(error){
            return "Ni se sabe que es";
        });
    }

  	handleClick(event) {
        fetch('config.json')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
    	   this.isMutant(response.server_path)
            
        })
  	}

  	render() {

    	return (
      		<div class="checkMutant">
                {this.props.showMe && (
                    <Button color="primary" type="submit"  onClick={this.handleClick}>¿ES MUTANTE?</Button>
                )}
            </div> 
    	);
  	}
}

export default MutantCheck;



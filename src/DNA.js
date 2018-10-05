import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      <Form inline>
        <FormGroup>
          <Label for="ADN" >Ingrese ADN</Label>
          <Input type="text"  name="ADN" value={this.state.value} onChange={this.handleChange}/>
        </FormGroup>
        <Button onClick={this.handleClick} color="danger" >Ingresar</Button>
      </Form>
    );
  }
}

export default DNA;

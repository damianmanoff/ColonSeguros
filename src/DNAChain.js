import React, { Component } from 'react';

class DNAChain extends Component {

  constructor(props) {
    super(props);

  }


  	render() {

  		var listItems = this.props.dnaLists.map(function(item) {
		return (
			<li >
			  {item}
			</li>
			);
		});

    	return (
      		<ul>
				{listItems}
			</ul>
    	);
  	}
}

export default DNAChain;



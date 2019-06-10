import React, { Component } from 'react';
import './style.css';



class Gameboard extends Component {
	constructor(props) {
    super(props);
		this.randomCards = this.props.randomCards;
		this.inProp = 300;
	}
	render() {	
		return (
			<div className="flex flex-wrap my-8 p-3 bg-orange-100">
					{this.props.randomCards}
			</div>
		)
	}
}

export default Gameboard;
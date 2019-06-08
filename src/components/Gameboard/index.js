import React, { Component } from 'react';


class Gameboard extends Component {
	constructor(props) {
    super(props);
		this.randomCards = this.props.randomCards;
	}
	
	render() {	
		return (
			<div className="flex flex-wrap my-8 p-3 bg-purple-100 ">
				{this.props.randomCards}
			</div>
		)
	}
}

export default Gameboard;
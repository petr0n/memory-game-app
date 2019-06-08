import React, { Component } from 'react';
import Scoreboard from '../Scoreboard/';


class Header extends Component {
	render() {
		console.log('header', this.props.currentGameScore);
		return (
			<header className="bg-orange-200 m-1 p-6 rounded shadow-lg">
			<h1 className="text-orange-700 text-3xl">Memory Game</h1>
			<Scoreboard 
				currentGameScore={this.props.currentGameScore} 
				overallScore={this.props.overallScore} />
			</header>
		)
	}
}

export default Header;
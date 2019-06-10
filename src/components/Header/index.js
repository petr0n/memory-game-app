import React, { Component } from 'react';
import Scoreboard from '../Scoreboard/';
import SuitPicker from '../SuitPicker/';


class Header extends Component {
	render() {
		return (
			<div>
				<header className="bg-orange-200 m-1 p-6 rounded shadow-lg">
					<h1 className="text-orange-700 text-3xl">Memory Game</h1>
					<Scoreboard 
						currentGameScore={this.props.currentGameScore} 
						overallScore={this.props.overallScore} />
				</header>
				<SuitPicker changeSuit={this.props.changeSuit}/>
			</div>
		)
	}
}

export default Header;
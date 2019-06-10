import React, { Component } from 'react';
import SuitPicker from '../SuitPicker/';


class Header extends Component {
	render() {
		return (
			<header className="bg-orange-200 p-6">
				<SuitPicker 
					changeSuit={this.props.changeSuit}
					currentSuit={this.props.currentSuit} />
				<h1 className="text-orange-700 text-3xl">Memory Game</h1>
			</header>
		)
	}
}

export default Header;
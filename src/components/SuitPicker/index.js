import React, { Component } from 'react';

class SuitPicker extends Component {
	
	render(){
		return (
			<ul className="flex flex-row justify-end content-center">
				<li className="text-sm">Pick a different to suit</li>
				<li className="ml-4 cursor-pointer hover:text-orange-500" onClick={() => this.props.changeSuit('clubs')}>&clubs; Clubs</li>
				<li className="ml-3 cursor-pointer hover:text-orange-500" onClick={() => this.props.changeSuit('diamonds')}>&diams; Diamonds</li>
				<li className="ml-3 cursor-pointer hover:text-orange-500" onClick={() => this.props.changeSuit('hearts')}>&hearts; Hearts</li>
				<li className="ml-3 cursor-pointer hover:text-orange-500" onClick={() => this.props.changeSuit('spades')}>&spades; Spades</li>
			</ul>
		)
	}
}

export default SuitPicker;

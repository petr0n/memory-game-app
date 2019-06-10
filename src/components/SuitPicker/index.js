import React, { Component } from 'react';

class SuitPicker extends Component {
	
	render(){
		console.log('this.props.currentSuit', this.props)
		return (
			<ul className="flex flex-row items-center justify-end content-center">
				<li className="text-xs">Pick a different suit</li>
				<li 
					className={`ml-4 p-2 cursor-pointer hover:text-orange-500 ${this.props.currentSuit === 'clubs' ? 'bg-white rounded-l-full' : ''}`} onClick={() => this.props.changeSuit('clubs')}>
					<span className="text-black">&clubs;</span> Clubs
				</li>
				<li 
					className={`ml-3 p-2 cursor-pointer hover:text-orange-500 ${this.props.currentSuit === 'diamonds' ? 'bg-white rounded-l-full' : ''}`} onClick={() => this.props.changeSuit('diamonds')}>
					<span className="text-red-600">&diams;</span> Diamonds
				</li>
				<li 
					className={`ml-3 p-2 cursor-pointer hover:text-orange-500 ${this.props.currentSuit === 'hearts' ? 'bg-white rounded-l-full' : ''}`} onClick={() => this.props.changeSuit('hearts')}>
					<span className="text-red-600">&hearts;</span> Hearts
				</li>
				<li 
					className={`ml-3 p-2 cursor-pointer hover:text-orange-500 ${this.props.currentSuit === 'spades' ? 'bg-white rounded-l-full' : ''}`} onClick={() => this.props.changeSuit('spades')}>
					<span className="text-black">&spades;</span> Spades
				</li>
			</ul>
		)
	}
}

export default SuitPicker;

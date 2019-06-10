import React, { Component } from 'react';

class Gameover extends Component {

	render() {	
		return (
			<div className="text-center m-8 p-3 bg-orange-100">
				<h2 className="text-2xl text-bold my-4 text-orange-600">Game Over</h2>
				<div className="m-4">
					<button className="border hover:bg-orange-900 hover:text-white bg-orange-200 border-orange-600 rounded p-2 text-xl" onClick={this.props.restartGame}>Play again</button>
				</div>
			</div>
		)
	}
}

export default Gameover;
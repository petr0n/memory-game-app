import React, { Component } from 'react';

class Scoreboard extends Component {
	// state = {
	// 	overallScore: 0,
	// 	currentGameScore: 0
	// };

	render() {	
		return (
			<div className="flex justify-end">
				<div className="rounded mr-8">
					Current Score: {this.state.currentGameScore}
				</div>
				<div className="rounded">
					Total Score: 0
				</div>
			</div>
		)
	}
}

export default Scoreboard;
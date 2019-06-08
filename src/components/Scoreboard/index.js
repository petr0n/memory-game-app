import React, { Component } from 'react';

class Scoreboard extends Component {

	render() {	
		return (
			<div className="flex justify-end">
				<div className="rounded mr-8">
					Current Score: {this.props.currentGameScore}
				</div>
				<div className="rounded">
					Total Score: {this.props.overallScore}
				</div>
			</div>
		)
	}
}

export default Scoreboard;
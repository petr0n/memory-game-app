import React, { Component } from 'react';

class Scoreboard extends Component {

	render() {	
		return (
			<div className="sticky top-0 z-10 bg-orange-600">
				<div className="max-w-2xl mx-auto flex justify-end">
					<div className="p-2 mr-8 text-white">
					Current Guesses: {this.props.currentGameScore}
					</div>
					<div className="p-2 text-white">
					Total Failed Guesses: {this.props.overallScore}
					</div>
				</div>
			</div>
		)
	}
}

export default Scoreboard;
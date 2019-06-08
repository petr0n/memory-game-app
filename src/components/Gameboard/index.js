import React, { Component } from 'react';
import Gametile from '../Gametile';
import Cards from './Cards';

class Gameboard extends Component {
	constructor(props) {
    super(props);
		this.Gametilestate = {
			overallScore: 0,
			currentGameScore: 0,
			guessedCards: []
		};
	}

	componentDidMount() {
		this.initGame();
	}

	initGame = () => {
		let cards = Cards;
		let rando = this.shuffleCards(cards);
		console.log('rando', rando);
		this.setState({ randomCards: this.createGameTiles(rando) });
	}

	
	shuffleCards = (array) => {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
	}

	handleCardClick = (card) => {
		let gCards = this.state.guessedCards;
		if (gCards.includes(card)) {
			console.log('already guessed!')
		} else {
			let newScore = this.state.currentGameScore;
			newScore = ++newScore;
			this.setState({ currentGameScore: newScore })
			gCards.push(card);
		}
		this.setState({ guessedCards: gCards });
		console.log('guessedCards', this.state.guessedCards);
		this.initGame();
	}


	createGameTiles = (randomCards) => {
		let cards = [];
		for(let i = 0;i < 12; i++){
			cards.push(<Gametile card={randomCards[i]} key={randomCards[i]} handleCardClick={this.handleCardClick} />);
		}
		return cards;
	}

	
	render() {	
		return (
			<div className="flex flex-wrap my-8 p-3 bg-purple-100 ">
				{this.state.randomCards}
			</div>
		)
	}
}

export default Gameboard;
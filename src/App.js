import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Gameboard from './components/Gameboard/';
import Gametile from './components/Gametile';
import Cards from './components/Cards.js';


class App extends Component {
  constructor(props) {
    super(props);
		this.cards = Cards;
		this.state = {
			overallScore: 0,
      currentGameScore: 0,
			guessedCards: [],
			currentSuit: 'clubs'
		};
		this.newOverallScore = this.state.currentGameScore;
		this.newScore = this.state.currentGameScore;
  }

  handleCardClick = (e,card) => {
		e.preventDefault();
		let gCards = this.state.guessedCards;
		if (gCards.includes(card)) {
			console.log('already guessed!');
			this.newOverallScore = ++this.newOverallScore;
			this.setState({ 
				overallScore: this.newOverallScore,
				currentGameScore: 0
			});
		} else {
			this.newScore = ++this.newScore;
			this.setState({ currentGameScore: this.newScore });
			gCards.push(card);
		}
		this.setState({ guessedCards: gCards });
		// console.log('currentGameScore', this.state.currentGameScore);
		this.initGame(this.cards[this.state.currentSuit]);
  }

  componentDidMount() {
    this.initGame();
  }

	initGame = (currentSuit = this.cards[this.state.currentSuit]) => {
		// console.log('this.cards.clubs', this.cards.clubs);
		let randomCards = this.shuffleCards(currentSuit);
		// console.log('randomCards', randomCards);
		this.setState({ randomCards: this.createGameTiles(randomCards) });
	}

  
	shuffleCards = (array) => {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
	}

	createGameTiles = (randomCards) => {
		let cards = [];
		for(let i = 0;i < 12; i++){
			cards.push(<Gametile card={randomCards[i]} key={randomCards[i]} handleCardClick={this.handleCardClick} />);
		}
		return cards;
	}

	changeSuit = (suit) => {
		// console.log('suit', suit);
		this.setState({ 
			currentSuit: suit,
			currentGameScore: 0
		});
		this.initGame(this.cards[suit]);
	}
  
  render() {
    return (
      <Wrapper>
				<Header 
					currentGameScore={this.state.currentGameScore} 
					overallScore={this.state.overallScore}
					changeSuit={this.changeSuit} />
					<Gameboard randomCards={this.state.randomCards} />
				<Footer />
      </Wrapper>
    );
  }
}

export default App;

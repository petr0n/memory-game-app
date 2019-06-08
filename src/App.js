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
      guessedCards: []
		};
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
		console.log('currentGameScore', this.state.currentGameScore);
		this.initGame();
  }

  componentDidMount() {
    this.initGame();
  }

	initGame = () => {
		let randomCards = this.shuffleCards(this.cards);
		console.log('randomCards', randomCards);
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

  
  render() {
    return (
      <Wrapper>
      <Header 
        currentGameScore={this.state.currentGameScore} 
        overallScore={this.state.overallScore} />
      <Gameboard randomCards={this.state.randomCards} />
      <Footer />
      </Wrapper>
    );
  }
}

export default App;

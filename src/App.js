import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Wrapper from './components/Wrapper/';
import Scoreboard from './components/Scoreboard/';
import Gameboard from './components/Gameboard/';
import Gameover from './components/Gameover/';
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
			currentSuit: 'clubs',
			gameOver: false
		};
		this.newOverallScore = this.state.currentGameScore;
		this.newScore = this.state.currentGameScore;
  }

  handleCardClick = (e,card) => {
		e.preventDefault();
		let gCards = this.state.guessedCards;
		console.log('gCards', gCards);
		if (gCards.includes(card)) {
			console.log('already guessed!');
			this.newOverallScore = ++this.newOverallScore;
			this.newScore = 0;
			gCards = [];
			this.setState({ 
				overallScore: this.newOverallScore,
				currentGameScore: 0,
				gameOver: true
			});
			
		} else {
			this.newScore = ++this.newScore;
			this.setState({ currentGameScore: this.newScore });
			gCards.push(card);
			this.initGame(this.cards[this.state.currentSuit]);
		}
		this.setState({ guessedCards: gCards });
  }

  componentDidMount() {
    this.initGame();
  }


	initGame = (currentSuit = this.cards[this.state.currentSuit]) => {
		let randomCards = this.shuffleCards(currentSuit);
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
		this.setState({ 
			currentSuit: suit,
			currentGameScore: 0
		});
		this.initGame(this.cards[suit]);
	}

	restartGame = () => {
		this.setState({ gameOver: false });
		this.initGame(this.cards[this.state.currentSuit]);
	}
  
  render() {
		return (
			<div>
				<Header 
					changeSuit={this.changeSuit}
					currentSuit={this.state.currentSuit} />
				<Scoreboard 
					currentGameScore={this.state.currentGameScore} 
					overallScore={this.state.overallScore} />
				<Wrapper>
					{this.state.gameOver ? 
						(<Gameover restartGame={this.restartGame} />) :
						(<Gameboard randomCards={this.state.randomCards} />)
					}
				</Wrapper>
				<Footer />
			</div>
    );
  }
}

export default App;

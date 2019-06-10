import React, { Component } from 'react';
import './style.css';
import AnimateLoad from '../../components/AnimateLoad.js';

class Gametile extends Component {
// const Gametile = (props) => {
	constructor(props){
    super(props);
		this.card = props.card;
		this.flipCardOver = this.flipCardOver.bind(this);
		this.flipCardOut = this.flipCardOut.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.cardSrcUrl = `../../images/${props.card}.png`;
		this.cardFrontStyle = {
			backgroundImage: `url(${this.cardSrcUrl})`
		}
  }

	flipCardOver = (e) => { e.currentTarget.classList.add('is-flipped') }
	flipCardOut = (e) => { e.currentTarget.classList.remove('is-flipped') }

	handleClick(e, card) {
		e.preventDefault();
		this.props.handleCardClick(e, card);
	}


	render() {	
		return (
			<div className="tile rounded m-1 h-30">
			{/* 
				<div className="h-30 p-3 w-1/4">
					<img src={this.cardSrcUrl} alt={this.card} onClick={this.handleCardClick} /> 
					</div>
				*/}
				<div className="scene" onClick={e => this.handleClick(e, this.card)}>
					<div className="card" onMouseOver={this.flipCardOver} onMouseOut={this.flipCardOut}>
						<div className="card__face card__face--front" style={this.cardFrontStyle}></div>
						<div className="card__face card__face--back"></div>
					</div>
				</div>
			</div>
		)
	}
}

const WrappedComponent = AnimateLoad(Gametile);

export default WrappedComponent;
// export default Gametile;

// <div class="scene">
//   <div class="card">
//     <div class="card__face card__face--front">front</div>
//     <div class="card__face card__face--back">back</div>
//   </div>
// </div>
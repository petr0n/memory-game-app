import React, { Component } from 'react';

const AnimateLoad = (WrappedComponent) => {
	return class extends Component {
		state = {
			visible: ''
		}

		addDelay() {
			this.timeoutId = setTimeout(function () {
				this.setState({visible: true});
			}.bind(this), 500);
		}

		componentDidMount () {
			this.addDelay();
		} 
		componentWillUnmount () {
			if (this.timeoutId) {
				clearTimeout(this.timeoutId);
				this.setState({visible: false});
			}
		}
		componentDidUpdate() {
			// console.log('componentDidUpdate');
			// this.addDelay();
		}

		render(){
			return (
				<div className={`fade-in ${this.state.visible ? 'visible' : null}`}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}
export default AnimateLoad;

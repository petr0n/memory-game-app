import React, { Component } from 'react';

const AnimateLoad = (WrappedComponent) => {
	return class extends Component {
		state = {didMount: false}
		componentDidMount(){
			setTimeout(() => {
				this.setState({didMount: true})
			}, 500);
		}
		render(){
			const {didMount} = this.state
			return (
				<div className={`h-30 p-3 w-1/4 fade-in ${didMount && 'visible'}`}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}
export default AnimateLoad;

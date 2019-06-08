import React from 'react';

const Wrapper = (props) => {
	return (
		<div className="max-w-2xl mx-auto">{props.children}</div>
	)
}

export default Wrapper;
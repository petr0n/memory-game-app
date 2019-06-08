import React from 'react';
import Scoreboard from '../Scoreboard/';


const Header = () => {
	return (
		<header className="bg-purple-200 m-1 p-6 rounded shadow-lg">
			<h1 className="text-white text-3xl">Memory Game</h1>
			<Scoreboard />
		</header>
	)
}

export default Header;
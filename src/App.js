import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper/';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Gameboard from './components/Gameboard/';

function App() {
  return (
    <Wrapper>
      <Header />
      <Gameboard />
      <Footer />
    </Wrapper>
  );
}

export default App;

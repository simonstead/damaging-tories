import React, { Component } from 'react';
import Header from './components/Header'
import RandomQuote from './components/RandomQuote'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomQuote />
      </div>
    );
  }
}

export default App;

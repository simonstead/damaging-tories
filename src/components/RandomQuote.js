import React, { Component } from 'react';
import './RandomQuote.css'
import data from '../data/data.js';

class RandomQuote extends Component {
  constructor(props) {
    super(props)
    const randomQuote = this.getRandomQuote();
    const initialQuote =   {
        "id": 0,
        "quote": "The Conservative party is privatising the NHS, and 84% of doctors and nurses disagree with their policies",
        "src": "https://www.google.com",
        "author": "Simon Stead"
      }
    this.state = {
      randomQuote: randomQuote || initialQuote
    }

  }

  getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random()*data.length);
    const randomQuote = data[randomNumber];
    return randomQuote;
  }

  render() {
    return (
      <div className="RandomQuote">
        <div className="Quote">
          <h2>{ this.state.randomQuote.quote }</h2>
        </div>
        <div className="Author">
          <label>Author</label>
          <h3>{ this.state.randomQuote.author }</h3>
        </div>
        <div className="Source">
          <label>Source</label>
          <a href={this.state.randomQuote.src}>
            <h3>{ this.state.randomQuote.src }</h3>
          </a>
        </div>
        <div className="Buttons">
          <button ref="new_quote" onClick={() => this.setState({ randomQuote: this.getRandomQuote() })}>New Quote</button>
          <button>Submit a quote</button>
        </div>
      </div>
    )
  }
}

export default RandomQuote;

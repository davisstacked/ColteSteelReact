// Core React Concept Review

// Component 
// building block of React
// combines logic (JS) and presentation (JSX)

// Prop
// data passed to a component (or found via defaults)
// immutable; component cannot change its own props. 

// State
// internal data specific to a component
// data that changes over time!

import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.score}</h1>
      </div>
    )
  }
}
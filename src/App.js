import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './model/Board.js'

class App extends Component {
  render() {
    const board = new Board(8);

    board.createGrid();

    console.table(board.grid);
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

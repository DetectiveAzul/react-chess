import Cell from './Cell.js';

class Board {
  constructor(size) {
    this.size = size;
    this.boardCells = []
    this.grid = []
  };

  createCell(color) {
    const newCell = new Cell(color);
    this.boardCells.push(newCell);
  };

  //On a board of size 8:
  //This will create 64 cells, starting with a black cell and ending with
  //a white cell (this is because the order on the color seed starts with
  //the black color)

  createCells(seed) {
    for (var i = 0; i < size * 2; i++) {
      seed.forEach((color) => {
        createCell(color);
      });
    };
  };


};

export default Board;

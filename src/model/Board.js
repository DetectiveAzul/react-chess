import Cell from './Cell.js';

class Board {
  constructor(size) {
    this.size = size;
    this.boardCells = [];
    this.grid = [];
  };

  createCell(color) {
    return new Cell(color);
  };

  //On a board of size 8:
  //This will create 64 cells, starting with a black cell and ending with
  //a white cell (this is because the order on the color seed starts with
  //the black color)

  createCells(seed) {
    const numberOfLoops = Math.pow(this.size, 2)/2;
    for (var i = 0; i < numberOfLoops ; i++) {
      seed.forEach((color) => {
        this.boardCells.push(this.createCell(color));
      });
    };
  };

  //Take the first 8 cells from boardCells array and put them on a new array
  //Return them to createGrid()
  createGridRow() {
    const newRow = [];
    for (var i = 0; i < this.size; i++) {
      const shiftedCell = this.boardCells.shift();
      newRow.push(shiftedCell);
    };
    return newRow;
  };

  //On a board of size 8:
  //This function should create 8 rows
  createGrid() {
    for (var i = 0; i < this.size; i++) {
      this.grid.push(this.createGridRow());
    };
  };

};

export default Board;

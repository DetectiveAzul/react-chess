import assert from 'assert';
import colorSeed from '../pieces/colorSeed.js';
import Board from '../Board.js';
import Cell from '../Cell.js';

describe('Board', function() {
  let board;

  beforeEach(function() {
    board = new Board(8);
  });

  it('should start with 0 cells', function () {
    const actual = board.boardCells.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should start with an empty grid', function() {
    const actual = board.grid.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to create a Cell', function() {
    const actual = board.createCell(colorSeed[0]);
    const expected = new Cell(colorSeed[0]);
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to create all the Cells needed', function() {
    board.createCells(colorSeed);

    const actualLength = board.boardCells.length;
    const expectedLength = 64;

    const actualFirstCell = board.boardCells[0];
    const expectedFirstCell = new Cell(colorSeed[0]);

    const actualLastCell = board.boardCells[63];
    const expectedLastCell = new Cell(colorSeed[1]);

    assert.strictEqual(actualLength, expectedLength);
    assert.deepStrictEqual(actualFirstCell, expectedFirstCell);
    assert.deepStrictEqual(actualLastCell, expectedLastCell);
  });

  it('should be able to create a row of Cells', function() {
    board.createCells(colorSeed);
    const newRow = board.createGridRow();
    const actualFirstCell = newRow[0];
    const expectedFirstCell = new Cell(colorSeed[0]);

    const actualLastCell = newRow[7];
    const expectedLastCell = new Cell(colorSeed[1]);

    assert.deepStrictEqual(actualFirstCell, expectedFirstCell);
    assert.deepStrictEqual(actualLastCell, expectedLastCell);

  });

  it('should be able to create a grid of 8 rows with 8 cells', function() {
    board.createGrid();

    const actualGridLength = board.grid.length;
    const expectedGridLength = 8;

    const actualRowLength = board.grid[7].length;
    const expectedRowLength = 8;

    assert.strictEqual(actualGridLength, expectedGridLength);
    assert.strictEqual(actualRowLength, expectedRowLength);
  })

});

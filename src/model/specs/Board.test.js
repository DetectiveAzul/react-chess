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
    board.createCell(colorSeed[0]);
    const actual = board.boardCells[0];
    const expected = new Cell(colorSeed[0]);
    assert.deepStrictEqual(actual, expected);
  })

});

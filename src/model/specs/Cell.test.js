import assert from 'assert';
import Cell from '../Cell.js';
import Piece from '../Piece.js';

describe('Cell', function() {
  let cell01;
  let cell02;
  let piece;

  beforeEach(function() {
    piece = new Piece({"string": "Black", "hex": "#000000"}, 'Pawn');

    cell01 = new Cell({"string": "Black", "hex": "#000000"});
    cell02 = new Cell({"string": "White", "hex": "#e6d690"}, piece);

  });

  it('should have a color', function () {
    const actual = cell01.color.string;
    const expected = 'Black';
    assert.strictEqual(actual, expected);
  });

  it('can be empty', function() {
    const actual = cell01.piece;
    const expected = null;
    assert.strictEqual(actual, expected);
  });

  it('can contain a piece', function() {
    const actual = cell02.piece;
    const expected = piece;
    assert.deepStrictEqual(actual, expected);
  });

});

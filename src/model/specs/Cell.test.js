import assert from 'assert';
import Cell from '../Cell.js';
import Piece from '../Piece.js';
import colorSeed from '../pieces/colorSeed.js';

describe('Cell', function() {
  let cell01;
  let cell02;
  let piece;

  beforeEach(function() {
    piece = new Piece(colorSeed[0], 'Pawn');

    cell01 = new Cell(colorSeed[0]);
    cell02 = new Cell(colorSeed[1], piece);

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

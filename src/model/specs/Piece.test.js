import assert from 'assert';
import Piece from '../Piece.js';
import colorSeed from '../pieces/colorSeed.js';

describe('Piece', function() {
  let piece01;
  let piece02;

  beforeEach(function() {
    piece01 = new Piece(colorSeed[0], 'Pawn');
    piece02 = new Piece(colorSeed[1], 'Knight');
  });

  it('should have a color', function () {
      const actual = piece01.color.string;
      const expected = 'Black';
      assert.strictEqual(actual, expected);
    });

  it('should have a type', function() {
    const actual = piece02.type;
    const expected = 'Knight';
    assert.strictEqual(actual, expected);
  });

});

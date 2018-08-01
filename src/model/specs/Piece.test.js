import assert from 'assert';
import Piece from '../Piece.js';

describe('Piece', function() {
  let piece01;
  let piece02;

  beforeEach(function() {
    piece01 = new Piece({"string": "Black", "hex": "#000000"}, 'Pawn');
    piece02 = new Piece({"string": "White", "hex": "#e6d690"}, 'Knight');
  });

  it('should have a color', function () {
      const actual = piece01.color.string;
      const expected = 'Black';
      assert.deepStrictEqual(actual, expected);
    });

  it('should have a type', function() {
    const actual = piece02.type;
    const expected = 'Knight';
    assert.deepStrictEqual(actual, expected);
  });

});

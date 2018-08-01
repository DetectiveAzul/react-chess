import assert from 'assert';
import Piece from '../Piece.js';

describe('Piece', function() {
  let piece01;
  let piece02;

  beforeEach(function() {
    piece01 = new Piece('black', 'pawn');
    piece02 = new Piece('white', 'knight');
  });

  it('should have a color', function () {
      const actual = piece01.color;
      const expected = 'black';
      assert.deepStrictEqual(actual, expected);
    });

  it('should have a type', function() {
    const actual = piece02.type;
    const expected = 'knight';
    assert.deepStrictEqual(actual, expected);
  });

});

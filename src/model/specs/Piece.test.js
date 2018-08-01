import assert from 'assert';
import Piece from '../Piece.js';

describe('Piece', function() {
  let piece01;
  let piece02;

  beforeEach(function() {
    piece01 = new Piece('black');
    piece02 = new Piece('white');
  });

  it('should have a color', function () {
      const actual = piece01.color
      const expected = 'black'
      assert.deepStrictEqual(actual, expected);
    });
  
});

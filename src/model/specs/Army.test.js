import assert from 'assert';
import Army from '../Army.js';

describe('Piece', function() {
  let army01;
  let army02;

  beforeEach(function() {
    army01 = new Army('black');
    army02 = new Army('white');
  });

  it('should have a color', function () {
      const actual = army01.color;
      const expected = 'black';
      assert.deepStrictEqual(actual, expected);
    });

  it('should have pieces', function () {
      const actual = army02.pieces.length;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

});

import assert from 'assert';
import Army from '../Army.js';
import seed from '../pieces/PieceSeed.js';

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

      assert.strictEqual(actual, expected);
    });

  it('should have pieces', function () {
      const actual = army02.pieces.length;
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

  it('should be able to create a piece', function() {
    army01.createPiece({"type": "Pawn", "ammount": 8});

    const actualLength = army01.pieces.length;
    const actualType = army01.pieces[0].type;
    const actualColor = army01.pieces[0].color;

    const expectedLength = 1;
    const expectedType = 'Pawn';
    const expectedColor = 'black';

    assert.strictEqual(actualLength, expectedLength);
    assert.strictEqual(actualType, expectedType);
    assert.strictEqual(actualColor, expectedColor);

  });

  it('should be able to create a specific number of same type pieces', function() {
    army01.createPieces({"type": "Pawn", "ammount": 8});

    const actualLength = army01.pieces.length;
    const areAllPawns = army01.pieces.every((piece) => {
      return (piece.type === 'Pawn');
    });
    const expectedLength = 8;
    const expectedAreAllPawns = true;

    assert.strictEqual(actualLength, expectedLength);
    assert.strictEqual(areAllPawns, expectedAreAllPawns);

  });

  it('should be able to create the whole set of pieces', function() {
    army01.createArmy(seed);
    const actual = army01.pieces.length;
    const expected = 16;

    assert.strictEqual(actual, expected);
  });

});

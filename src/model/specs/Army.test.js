import assert from 'assert';
import Army from '../Army.js';
import Piece from '../Piece.js';
import pieceSeed from '../pieces/pieceSeed.js';
import colorSeed from '../pieces/colorSeed.js';

describe('Army', function() {
  let army01;
  let army02;

  beforeEach(function() {
    army01 = new Army(colorSeed[0]);
    army02 = new Army(colorSeed[1]);
  });

  it('should have a color', function () {
      const actual = army01.color.string;
      const expected = 'Black';

      assert.strictEqual(actual, expected);
    });

  it('should have pieces', function () {
      const actual = army02.pieces.length;
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

  it('should be able to create a piece', function() {
    const actualPiece = army01.createPiece(pieceSeed[0]);
    const expectedPiece = new Piece(colorSeed[0], "Pawn");
    assert.deepStrictEqual(actualPiece, expectedPiece);
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
    army01.populateArmy(pieceSeed);
    const actual = army01.pieces.length;
    const expected = 16;

    assert.strictEqual(actual, expected);
  });

});

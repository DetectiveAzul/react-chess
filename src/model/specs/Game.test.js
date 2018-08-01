import assert from 'assert';
import Game from '../Game.js';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should start with no armies', function () {
    const actual = game.armies.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to create and populate Armies', function() {
    game.setUpArmies();

    const actual = game.armies.length;
    const expected = 2;

    const actualArmySize = game.armies[0].pieces.length;
    const expectedArmySize = 16;

    assert.strictEqual(actual, expected);
    assert.strictEqual(actualArmySize, expectedArmySize);
  });

});

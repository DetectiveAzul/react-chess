import Army from './Army.js';
import colorSeed from './pieces/colorSeed.js';
import pieceSeed from './pieces/pieceSeed.js';

class Game {
  constructor() {
    this.armies = [];
  };

  setUpArmies() {
    colorSeed.forEach((color) => {
      this.createArmy(color);
    });
  };

  createArmy(color) {
    //Create the army
    const newArmy = new Army(color);
    //populateArmy
    newArmy.populateArmy(pieceSeed);
    //Push to the array
    this.armies.push(newArmy);
  };

};

export default Game;

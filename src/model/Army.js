import Piece from './Piece.js';

class Army {
  constructor(color) {
    this.color = color;
    this.pieces = [];
  };

  createPiece(piece) {
    return new Piece(this.color, piece.type);
  };

  createPieces(piece) {
    for (var i = 0; i < piece.ammount; i++) {
      this.pieces.push(this.createPiece(piece));
    };
  };

  populateArmy(seed) {
    seed.forEach((piece) => {
      this.createPieces(piece);
    });
  };
};

export default Army;

import Piece from './Piece.js';

class Army {
  constructor(color) {
    this.color = color;
    this.pieces = [];
  };

  createPiece(piece) {
    const newPiece = new Piece(this.color, piece.type);
    this.pieces.push(newPiece);
  };

  createPieces(piece) {
    for (var i = 0; i < piece.ammount; i++) {
      this.createPiece(piece);
    };
  }

  createArmy(seed) {
    seed.forEach((piece) => {
      this.createPieces(piece);
    });
  };
};

export default Army;

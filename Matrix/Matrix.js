class Matrix {
  constructor() {
    this.board = [];
  }
  // createBoard
  createBoard(rows, cols, filler) {
    // [0, 0, 0]
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(filler)
      }
      this.board.push(row)
    }
    return this.board;
  }
  // transpose
}

module.exports = Matrix

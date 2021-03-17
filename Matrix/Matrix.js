class Matrix {
  constructor() {
    this.board = [];
  }
  // createBoard
  createBoard(cols, rows, filler) {
    // [0, 0, 0]
    for (let j = 0; j < rows; j++) {
      const row = [];
      for (let i = 0; i < cols; i++) {
        row.push(filler)
      }
      this.board.push(row)
    }
    return this.board;
  }
  // transpose
}

module.exports = Matrix

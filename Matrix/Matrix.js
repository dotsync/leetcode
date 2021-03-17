class Matrix {
  constructor() {
    this.board = [];
  }
  // createBoard
  createBoard(cols, rows, filler) {
    // [0, 0, 0]
    let random = false
    if (filler === undefined) random = true
    for (let j = 0; j < rows; j++) {
      const row = [];
      for (let i = 0; i < cols; i++) {
        if (random) filler = Math.floor(Math.random() * 100)
        row.push(filler)
      }
      this.board.push(row)
    }
    return this.board;
  }
  // transpose
}

module.exports = Matrix

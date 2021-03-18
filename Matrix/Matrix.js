/*
## Matrix
- [ ] [prison-cells-after-n-days](https://leetcode.com/problems/prison-cells-after-n-days/)
- [ ] [path-with-maximum-minimum-value](https://leetcode.com/problems/path-with-maximum-minimum-value/)
- [ ] [spiral-matrix-ii](https://leetcode.com/problems/spiral-matrix-ii/)
- [] [rotting-oranges](https://leetcode.com/problems/rotting-oranges/)
- [ ] [walls-and-gates](https://leetcode.com/problems/walls-and-gates/) */

class Matrix {
  constructor() {
    this.board = [];
  }
  // #createBoard
  createBoard(cols, rows, filler) {
    // [0, 0, 0]
    let random = false
    // You could use null as a filler
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
  // #rotting-oranges
  rottingOranges(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    let fresh = 0;
    const queue = [];
    // iterate through matrix row by row
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        // if rotten, push to queue
        if (matrix[i][j] === 2) queue.push([i, j]);
        // if apple fresh++
        if (matrix[i][j] === 1) fresh++;
      }
    }
    let minute = 0;
    // BFS
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift();
        if (x - 1 >= 0 && matrix[x - 1][y] === 1) {
          matrix[x - 1][y] = 2;
          fresh--;
          queue.push([x - 1, y]);
        }
        if (x + 1 < row && matrix[x + 1][y] === 1) {
          matrix[x + 1][y] = 2;
          fresh--;
          queue.push([x + 1, y]);
        }
        if (y - 1 >= 0 && matrix[x][y - 1] === 1) {
          matrix[x][y - 1] = 2;
          fresh--;
          queue.push([x, y - 1]);
        }
        if (y + 1 < col && matrix[x][y + 1] === 1) {
          matrix[x][y + 1] = 2;
          fresh--;
          queue.push([x, y + 1]);
        }
      }
      if (queue.length > 0) minute++;
    }
    // if fresh === 0 return minutes it took, else return -1
    return fresh === 0 ? minute : -1;
  }
}

module.exports = Matrix

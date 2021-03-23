const numIslands = (matrix) => {
  if (matrix === null || matrix.length === 0) return 0

  let islands = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // console.log(matrix[row][col])
      if (matrix[row][col] === '1') {
        islands += dfs(matrix, row, col);
      }
    }
  }
  return islands

  function dfs(matrix, row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length || matrix[row][col] === '0') {
      return 0;
    }
    // hide island portion to prevent infinite loop
    matrix[row][col] = '0'
    // search adjacent vertex
    dfs(matrix, row + 1, col)
    dfs(matrix, row - 1, col)
    dfs(matrix, row, col + 1)
    dfs(matrix, row, col - 1)
    return 1;
  }
}

module.exports = numIslands

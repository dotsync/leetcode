const arrayTester = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    for (let j = 0; j < actual.length; j++) {
      if (actual[i][j] !== expected[i][j]) console.log('failed');
    }
  }
  actual.length === expected.length && console.log('passed')
}

function rotateMatrix(matrix) {
  const transpose = (m) => {
    for (let i = 0; i < m.length; i++) {
      for (let j = i; j < m.length; j++) {
        let temp = m[j][i];
        m[j][i] = m[i][j]
        m[i][j] = temp;
      }
    }
  }
  const reflect = (m) => {
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < (m.length / 2); j++) {
        let temp = m[i][j]
        m[i][j] = m[i][m.length - j - 1];
        m[i][m.length - j - 1] = temp;
      }
    }
  }
  transpose(matrix)
  reflect(matrix)
  return matrix;
}

module.exports = rotateMatrix

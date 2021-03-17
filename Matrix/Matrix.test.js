const Matrix = require('./Matrix');

describe('Matrix', () => {
  describe('Matrix Methods', () => {
    test('should create a 3 x 3 matrix', () => {
      let matrix = new Matrix;
      expect(matrix.createBoard(3, 3, 0)).toStrictEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]])
    })

  })

})

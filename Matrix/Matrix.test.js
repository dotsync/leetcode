const Matrix = require('./Matrix');

describe('Matrix', () => {
  describe('Matrix Methods', () => {
    test('should create a 3 x 3 Matrix', () => {
      let matrix = new Matrix;
      expect(matrix.createBoard(3, 3, 0)).toStrictEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]])
    })
    test('should create a 3 x 2 Matrix', () => {
      let matrix = new Matrix;
      expect(matrix.createBoard(2, 3, 0)).toStrictEqual([
        [0, 0],
        [0, 0],
        [0, 0]])
    })
    test('should create a 2 x 3 Matrix', () => {
      let matrix = new Matrix;
      expect(matrix.createBoard(3, 2, 0)).toStrictEqual([
        [0, 0, 0],
        [0, 0, 0]])
    })
  })
})


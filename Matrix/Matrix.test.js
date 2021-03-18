const Matrix = require('./Matrix');

describe('Matrix', () => {
  describe('Matrix Methods', () => {
    describe('#createBoard', () => {
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
    describe('#rottingOranges', () => {
      test('should return -1 if not all oranges will rot', () => {
        const matrix = new Matrix
        matrix.board = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
        expect(matrix.rottingOranges(matrix.board)).toBe(-1);
      })
      test('should return Return the minimum number of minutes that must elapse until no cell has a fresh orange', () => {
        const matrix = new Matrix;
        matrix.board = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
        expect(matrix.rottingOranges(matrix.board)).toBe(4)
      })
      test('should return 0 since all of the oranges are already rotten', () => {
        const matrix = new Matrix;
        matrix.board = [[0, 2]]
        expect(matrix.rottingOranges(matrix.board)).toBe(0)
      })
    })
  })
})


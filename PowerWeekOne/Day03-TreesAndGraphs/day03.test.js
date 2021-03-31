const floodFill = require('./floodFill');

describe('Day03 Trees And Graphs Section', () => {
  /** ******************/
  // Easy Problems
  // floodFill
  /** ******************/
  describe('Easy Problems', () => {
    describe('floodFill problem', () => {
      test('should change the colors of pixels', () => {
        const image1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const expected1 = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];
        expect(floodFill(image1, 1, 1, 2)).toStrictEqual(expected1);
      });
    });
  });
  /** ******************/
  // Medium Problems
  // binaryTreeLevelOrderTraversal
  // validateBinarySearchTree
  // courseScheduler
  // numberOfIslands
  /** ******************/
  describe('Medium Problems', () => {
  });
  /** ******************/
  // Hard Problems
  // wordLadder
  /** ******************/
  describe('Hard Problems', () => {
  });
});

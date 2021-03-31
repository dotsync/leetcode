const floodFill = function(image, sr, sc, newColor) {
  const startingColor = image[sr][sc];
  if (startingColor === newColor) return image;
  // call to the dfs helper on current pixel
  dfsFill(image, sr, sc, startingColor, newColor);
  // return the modified image
  return image;
  /**
   * @param {Array} image 2D Array representin an image
   * @param {int} row Row coordinate
   * @param {int} col Column coordinate
   * @param {int} color Starting color of pixel
   * @param {int} newColor New color for pixel to be
   * @return {void}
   */
  function dfsFill(image, row, col, color, newColor) {
    // check rows bounds
    if (row < 0 || row >= image.length) return;
    // check col bounds
    if (col < 0 || col >= image[row].length) return;
    // current pixel must be color which is 1 different from newColor
    // else we should not change
    if (image[row][col] !== color) return;

    // change current pixel
    image[row][col] = newColor;
    // dfs currrent pixels neighbors (row is up, down. Col is left, right)
    // check up and down neighbor
    dfsFill(image, row + 1, col, color, newColor);
    dfsFill(image, row - 1, col, color, newColor);
    // check left and right neighbor
    dfsFill(image, row, col + 1, color, newColor);
    dfsFill(image, row, col - 1, color, newColor);
  }
};

module.exports = floodFill;

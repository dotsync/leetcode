/* eslint-disable require-jsdoc */
class MovingAverageFromDataStream {
  constructor(size) {
    this.size = size;
    this.stream = [];
  }
  next(val) {
    this.stream.push(val);
    if (this.stream.length > this.size) {
      this.stream.shift();
    }
    const avg = this.stream.reduce((a, b) => a + b, 0) / this.stream.length;
    return avg;
  }
}

module.exports = MovingAverageFromDataStream;

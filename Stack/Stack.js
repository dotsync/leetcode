/* eslint-disable require-jsdoc */
module.exports = class Stack {
  constructor() {
    this.size = 0;
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
    this.size ++;
  }
  pop() {
    this.stack.shift();
    this.size --;
  }
};

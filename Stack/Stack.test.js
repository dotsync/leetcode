const Stack = require('./Stack');

describe('Stack data sctructure', () => {
  test('should have a size property', () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
    stack.push(1);
    stack.push(1);
    expect(stack.size).toBe(2);
    stack.pop();
    expect(stack.size).toBe(1);
  });
});


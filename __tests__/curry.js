const fp = require('..');

describe('curry', () => {
  it('curries a one arg function', () => {
    const square = (n) => n * n;
    const curriedSquare = fp.curry(square);
    expect(curriedSquare()).toBeInstanceOf(Function);
    expect(curriedSquare(4)).toBe(16);
    expect(curriedSquare()()(4)).toBe(16);
  });
  it('curries a two arg function', () => {
    const adder = fp.curry((a, b) => a + b);
    const add1 = adder(1);
    expect(add1(2)).toBe(3);
  });
  it('is auto-curried', () => {
    const adder = fp.curry((a, b) => a + b);
    const add1 = adder(1);
    expect(add1()()(2)).toBe(3);
  });
  it('curries a three arg function', () => {
    const func = (a, b, c) => a + b + c;
    const curriedFunc = fp.curry(func);
    expect(curriedFunc).toBeInstanceOf(Function);
    expect(curriedFunc(1)).toBeInstanceOf(Function);
    expect(curriedFunc(1)(2)).toBeInstanceOf(Function);
    expect(curriedFunc(1, 2)).toBeInstanceOf(Function);
    expect(curriedFunc(1)(2)(3)).toBe(6);
    expect(curriedFunc(1, 2)(3)).toBe(6);
    expect(curriedFunc(1)(2, 3)).toBe(6);
  });
  it('does not fail when given too many arguments', () => {
    expect(fp.curry((a, b) => a + b)(1,2,3)).toBe(3);
  });
});

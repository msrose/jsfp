const fp = require('..');

describe('curryCount', () => {
  const summer = (...args) => args.reduce((a, b) => a + b);
  it('curries a function to two args', () => {
    const twoAdder = fp.curryCount(2, summer);
    expect(twoAdder(3, 4)).toBe(7);
    expect(twoAdder(3)(4)).toBe(7);
  });
  it('is auto-curried', () => {
    const twoAdder = fp.curryCount(2)()()(summer);
    expect(twoAdder(3, 4)).toBe(7);
    expect(twoAdder(3)(4)).toBe(7);
  });
  it('curries a function to three args', () => {
    const threeAdder = fp.curryCount(3, summer);
    expect(threeAdder(1, 2, 3)).toBe(6);
    expect(threeAdder(1, 2)(3)).toBe(6);
    expect(threeAdder(1)(2, 3)).toBe(6);
    expect(threeAdder(1)(2)(3)).toBe(6);
  });
});

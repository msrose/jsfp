const fp = require('..');

describe('compact', () => {
  it('returns a function', () => {
    expect(fp.compact()).toBeInstanceOf(Function);
  });
  it('removes all falsy values from an array', () => {
    expect(fp.compact()([1, '', 2, false, undefined, 3, null, NaN, 66])).toEqual([1,2,3,66]);
  });
});

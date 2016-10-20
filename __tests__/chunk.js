const fp = require('fp');

describe('chunk', () => {
  it('returns a function', () => {
    expect(fp.chunk()).toBeInstanceOf(Function);
  });
  it('breaks the array into correctly-sized chunks', () => {
    expect(fp.chunk(1, [1,2,3])).toEqual([[1],[2],[3]]);
    expect(fp.chunk(2, [1,2,3])).toEqual([[1,2],[3]]);
    expect(fp.chunk(3, [1,2,3])).toEqual([[1,2,3]]);
  });
  it('is auto-curried', () => {
    expect(fp.chunk(1)([1,2,3])).toEqual([[1],[2],[3]]);
    expect(fp.chunk(2)()()([1,2,3])).toEqual([[1,2],[3]]);
    expect(fp.chunk(3)([1,2,3])).toEqual([[1,2,3]]);
  });
});

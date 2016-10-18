const fp = require('..');

describe('map', () => {
  it('returns a function', () => {
    expect(fp.map()).toBeInstanceOf(Function);
  });
  it('returns an array when called twice', () => {
    expect(fp.map()([])).toBeInstanceOf(Array);
  });
  it('passes the current value as first argument to the iteratee', () => {
    const iteratee = jest.fn();
    fp.map(iteratee)([8,34,25]);
    expect(iteratee.mock.calls[0][0]).toBe(8);
    expect(iteratee.mock.calls[1][0]).toBe(34);
    expect(iteratee.mock.calls[2][0]).toBe(25);
  });
  it('passes the index as the second argument to the iteratee', () => {
    const iteratee = jest.fn();
    fp.map(iteratee)([6, 11, 33]);
    expect(iteratee.mock.calls[0][1]).toBe(0);
    expect(iteratee.mock.calls[1][1]).toBe(1);
    expect(iteratee.mock.calls[2][1]).toBe(2);
  });
  it('passes the array as the third argument to the iteratee', () => {
    const iteratee = jest.fn();
    const arr = [6, 11, 33];
    fp.map(iteratee)(arr);
    expect(iteratee.mock.calls[0][2]).toBe(arr);
    expect(iteratee.mock.calls[1][2]).toBe(arr);
    expect(iteratee.mock.calls[2][2]).toBe(arr);
  });
  it('puts the result of the iteratee into the returned array', () => {
    const iteratee = (n) => n * n;
    const arr = [6, 8, 10];
    expect(fp.map(iteratee)(arr)).toEqual([36, 64, 100]);
  });
});

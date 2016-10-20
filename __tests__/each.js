const fp = require('..');

describe('each', () => {
  it('returns a function', () => {
    expect(fp.each()).toBeInstanceOf(Function);
  });
  it('calls the iteratee for each item in the list', () => {
    const iteratee = jest.fn();
    fp.each(iteratee, [1,2,3]);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
  it('is auto-curried', () => {
    const iteratee = jest.fn();
    fp.each(iteratee)([1,2,3]);
    expect(iteratee).toHaveBeenCalledTimes(3);
  });
  it('passes the current value as first argument to the iteratee', () => {
    const iteratee = jest.fn();
    fp.each(iteratee)([8,34,25]);
    expect(iteratee.mock.calls[0][0]).toBe(8);
    expect(iteratee.mock.calls[1][0]).toBe(34);
    expect(iteratee.mock.calls[2][0]).toBe(25);
  });
  it('passes the index as the second argument to the iteratee', () => {
    const iteratee = jest.fn();
    fp.each(iteratee)([6, 11, 33]);
    expect(iteratee.mock.calls[0][1]).toBe(0);
    expect(iteratee.mock.calls[1][1]).toBe(1);
    expect(iteratee.mock.calls[2][1]).toBe(2);
  });
  it('passes the array as the third argument to the iteratee', () => {
    const iteratee = jest.fn();
    const arr = [6, 11, 33];
    fp.each(iteratee)(arr);
    expect(iteratee.mock.calls[0][2]).toBe(arr);
    expect(iteratee.mock.calls[1][2]).toBe(arr);
    expect(iteratee.mock.calls[2][2]).toBe(arr);
  });
  it('works with objects', () => {
    const iteratee = jest.fn();
    const obj = { b: 88, a: 44, c: 66 };

    fp.each(iteratee)(obj);

    const firstArgs = iteratee.mock.calls.map(c => c[0]);
    const secondArgs = iteratee.mock.calls.map(c => c[1]);

    expect(firstArgs).toContain(44);
    expect(firstArgs).toContain(66);
    expect(firstArgs).toContain(88);

    expect(secondArgs).toContain('a');
    expect(secondArgs).toContain('b');
    expect(secondArgs).toContain('c');

    expect(iteratee.mock.calls[0][2]).toBe(obj);
    expect(iteratee.mock.calls[1][2]).toBe(obj);
    expect(iteratee.mock.calls[2][2]).toBe(obj);
  });
});

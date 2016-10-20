const fp = require('..');

describe('map', () => {
  it('returns a function', () => {
    expect(fp.map()).toBeInstanceOf(Function);
  });
  it('returns an array when called twice', () => {
    expect(fp.map(() => {})([])).toBeInstanceOf(Array);
  });
  it('passes the current value as first argument to the iteratee', () => {
    const iteratee = jest.fn();
    fp.map(iteratee)([8, 34, 25]);
    expect(iteratee.mock.calls[0][0]).toBe(8);
    expect(iteratee.mock.calls[1][0]).toBe(34);
    expect(iteratee.mock.calls[2][0]).toBe(25);
  });
  it('is auto-curried', () => {
    expect(fp.map(n => n * n, [1, 2, 3])).toEqual([1, 4, 9]);
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
  it('works with objects', () => {
    let obj = { a: 1, b: 2, c: 3 };
    expect(fp.map(n => n * n)(obj)).toEqual([1, 4, 9]);

    const iteratee = jest.fn();
    obj = { b: 88, a: 44, c: 66 };

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

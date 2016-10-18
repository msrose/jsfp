const fp = {};

fp.each = (iteratee) => {
  return (arr) => {
    for(let i = 0; i < arr.length; i++) {
      iteratee(arr[i], i, arr);
    }
  };
};

fp.map = (iteratee) => {
  return (arr) => {
    const results = [];
    for(let i = 0; i < arr.length; i++) {
      results.push(iteratee(arr[i], i, arr));
    }
    return results;
  };
};

module.exports = fp;

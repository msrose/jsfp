const fp = {};

fp.each = (iteratee) => {
  return (arr) => {
    for(let i = 0; i < arr.length; i++) {
      iteratee(arr[i], i, arr);
    }
  };
};

module.exports = fp;

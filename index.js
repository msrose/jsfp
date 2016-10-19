const fp = {};

fp.chunk = (size) => {
  return (arr) => {
    const chunks = [];
    for(let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
};

fp.compact = () => {
  return (arr) => {
    const truthies = [];
    for(let i = 0; i < arr.length; i++) {
      if(!!arr[i]) {
        truthies.push(arr[i]);
      }
    }
    return truthies;
  };
};

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

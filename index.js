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

fp.curry = (func, argCount = func.length) => {
  return (...args) => {
    if(args.length >= argCount) {
      return func(...args);
    } else {
      return fp.curry(
        (...nextArgs) => func(...args.concat(nextArgs)),
        argCount - args.length
      );
    }
  };
};

fp.each = (iteratee) => {
  return (obj) => {
    const isArray = Array.isArray(obj);
    let index = 0;
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        iteratee(obj[prop], isArray ? index : prop, obj);
        index++;
      }
    }
  };
};

fp.map = (iteratee) => {
  return (obj) => {
    const values = [];
    fp.each((val, key, obj) => {
      values.push(iteratee(val, key, obj));
    })(obj);
    return values;
  };
};

module.exports = fp;

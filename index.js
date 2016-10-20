// internal fuctions

const curryCount = (arity, func) => {
  return (...args) => {
    if(args.length >= arity) {
      return func(...args);
    } else {
      return fp.curryCount(
        arity - args.length,
        (...nextArgs) => func(...args.concat(nextArgs))
      );
    }
  };
};

const curry = (func) => {
  return curryCount(func.length, func);
};

// public functions

const fp = {};

fp.chunk = (size, arr) => {
  const chunks = [];
  for(let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

fp.compact = (arr) => {
  const truthies = [];
  for(let i = 0; i < arr.length; i++) {
    if(!!arr[i]) {
      truthies.push(arr[i]);
    }
  }
  return truthies;
};

fp.curry = curry;

fp.curryCount = curryCount;

fp.each = (iteratee, obj) => {
  const isArray = Array.isArray(obj);
  let index = 0;
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      iteratee(obj[prop], isArray ? index : prop, obj);
      index++;
    }
  }
};

fp.map = (iteratee, obj) => {
  const values = [];
  fp.each((val, key, obj) => {
    values.push(iteratee(val, key, obj));
  })(obj);
  return values;
};

// auto-curry everything
for(let func in fp) {
  if(fp.hasOwnProperty(func)) {
    fp[func] = curry(fp[func]);
  }
}

module.exports = fp;

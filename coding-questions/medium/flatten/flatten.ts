type ArrayValue = any | Array<ArrayValue>;

// Solution 1: Iterative

export function flatten(value: Array<ArrayValue>): Array<any> {
  const res = [];
  const copy = value.slice();

  while (copy.length) {
    const item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      res.push(item);
    }
  }

  return res;
}

// Solution 2: Iterative with Array.prototype.some

export function flattenS(value: Array<ArrayValue>): Array<any> {
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }

  return value;
}

// Solution 3: Recursive with Array.prototype.reduce

export function flattenR(value: Array<ArrayValue>): Array<any> {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}

// Solution 4: Flatten the array-in-place

export function flattenArrayInPlace(value: Array<ArrayValue>): Array<any> {
  for (let i = 0; i < value.length; ) {
    if (Array.isArray(value[i])) {
      value.splice(i, 1, ...value[i]);
    } else {
      i++;
    }
  }
  return value;
}

// Solution 5: Recursive approaching using flatMap

export function flattenFlatMap(value: Array<ArrayValue>): Array<any> {
  return Array.isArray(value)
    ? value.flatMap((item) => flattenFlatMap(item))
    : value;
}

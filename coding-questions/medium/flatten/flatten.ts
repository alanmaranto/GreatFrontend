// Solution 1: Iterative

export function flatten(value: any): Array<any> {
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

export function flattenS(value: any): Array<any> {
  while (value.some(Array.isArray)) {
    console.log('...', ...value)
    value = [].concat(...value);

    console.log('value', value)
  }

  return value;
}

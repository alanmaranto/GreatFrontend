/* The term "deep clone" is not formally defined in JavaScript's language specification, but is generally well understood in the community. A deep clone makes a copy of JavaScript value, leading to a completely new value that has no references pointing back to the properties
 in the original object (if it's an object). Any changes made to the deep-copied object will not affect the original object.

Implement a deepClone function that performs a deep clone operation on JavaScript objects. 
You can assume the input object only contains JSON-serializable values, i.e. null, boolean, number, string, and will not contain 
any other built-in objects such as Date, Regex, Map or Set. */

// Solution 1 Using recursivit: It may cause Stack Overflow si son demasiados datos

 export function deepClone1(value) {
  if (typeof value !== "object" || value === null) return value;

  if (Array.isArray(value)) {
    return value.map((item) => deepClone1(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone1(value)])
  );
}

// Solution using a stack para muchos datos

export function deepClone2(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  const stack = [];
  const clone = Array.isArray(value) ? [] : {};

  stack.push({
    original: value,
    cloned: clone,
  });

  while (stack.length) {
    const { original, cloned } = stack.pop();

    if (Array.isArray(original)) {
      for (let i = 0; i < original.length; i++) {
        if (typeof original[i] === 'object' && original[i] !== null) {
          const newObj = Array.isArray(original[i]) ? [] : {};
          cloned[i] = newObj;
          stack.push({
            original: original[i],
            cloned: newObj,
          });
        } else {
          cloned[i] = original[i];
        }
      }
    } else {
      for (let key in original) {
        if (original.hasOwnProperty(key)) {
          if (typeof original[key] === 'object' && original[key] !== null) {
            const newObj = Array.isArray(original[key]) ? [] : {};
            cloned[key] = newObj;
            stack.push({
              original: original[key],
              cloned: newObj,
            });
          } else {
            cloned[key] = original[key];
          }
        }
      }
    }
  }

  return clone;
}

// Solution 2 Json.parse & Json.stringify (Flawed)

const obj = { user: { role: 'admin' } };
export const clonedObj = JSON.parse(JSON.stringify(obj)); // {user: {role: "admin"}}

// One Line Solution
export const clonedOneLine = structuredClone(obj);


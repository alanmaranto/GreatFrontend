export function isArray(value?: any): boolean {
  return Array.isArray(value);
}

export function isFunction(value: any): boolean {
  return typeof value === "function";
}

export function isObject(value: any): boolean {
  if (value === null || value === undefined) return false;
  return typeof value === "object" || typeof value === "function";
}

export function isPlainObject(value: any): boolean {
  if (value === null || value === undefined) return false;

  const prototype = Object.getPrototypeOf(value);
 
  return prototype === null || prototype === Object.prototype;
}

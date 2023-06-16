export function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}

export function isNumber(value: any): boolean {
  return typeof value === "number";
}

export function isNull(value: any): boolean {
  return value === null;
}

export function isString(value: any): boolean {
  return typeof value === "string";
}

export function isSymbol(value: any): boolean {
  return typeof value === "symbol";
}

export function isUndefined(value: any): boolean {
  return value === undefined;
}

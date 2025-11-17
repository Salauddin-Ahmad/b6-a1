//  Problem 1:

type ValueType =  string | number | boolean;

const formatValue = (value: ValueType) => {
  if (typeof value === "string") {
    const valueUppercase = value.toUpperCase();
    return valueUppercase;
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else if (value === false) {
      return true;
    }
  }
};

console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

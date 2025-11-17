type ValueType = string | number | boolean;

const formatValue = (value: ValueType): ValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
};


type ParamType = string | (string | number)[];

const getLength = (value: ParamType): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid value");
};





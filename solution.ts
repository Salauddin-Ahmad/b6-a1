// type ValueType = string | number | boolean;

// const formatValue = (value: ValueType): ValueType => {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }

//   if (typeof value === "number") {
//     return value * 10;
//   }

//   return !value;
// };


// type ParamType = string | (string | number)[];

// const getLength = (value: ParamType): number => {
//   if (typeof value === "string") {
//     return value.length;
//   } else if (Array.isArray(value)) {
//     return value.length;
//   }

//   throw new Error("Invalid value");
// };



class Person {
 
  name: string;
  age: number;

  // Standard constructor (no 'public' in parameters)
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Create instances
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); // Name: John Doe, Age: 30

const person2 = new Person('Alice', 25);
console.log(person2.getDetails()); // Name: Alice, Age: 25

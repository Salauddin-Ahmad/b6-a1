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

// class Person {
//   name
//   age

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`
//   }
// }

// // Create instances
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails()); // Name: John Doe, Age: 30

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails()); // Name: Alice, Age: 25

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails(): string {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// type Book = { title: string; rating: number };

// function filterByRating(items: Book[]): Book[] {
//   return items.filter(item => {
//     if (item.rating < 0 || item.rating > 5){
//       throw new Error(`Invalid rating for book "${item.title}": ${item.rating}`);
//     }
//     return item.rating >= 4;
//   });
// }

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

// type User = {id: number, name: string, email: string, isActive: boolean}

// const filterActiveUsers = (userArrays: User[]):User[]=> {
// return userArrays.filter((user: User) => user.isActive)
// }

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
//   isAvailable: boolean;
// }

// const printBookDetails = (bDetails: Book): void => {
//  return console.log(`Title: ${bDetails.title}, Author: ${bDetails.author}, Published: ${bDetails.publishedYear}, Available: ${bDetails.isAvailable ? 'Yes' : 'No'}`);
// }

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

// type arraystType = (string | number)[]

// const getUniqueValues = (arr1: arraystType, arr2: arraystType ) => {
//   const uniqueArr: arraystType = [];

// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

type arraystType = (string | number)[];

const getUniqueValues = (arr1: arraystType, arr2: arraystType): arraystType => {
  const unique: arraystType = [];

  const addUnique = (value: string| number) => {
    for(let i =0; )
  }
  return unique;
};

const array1 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

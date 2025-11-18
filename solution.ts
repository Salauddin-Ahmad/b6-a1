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



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type Books = { title: string; rating: number };

function filterByRating(items: Books[]): Books[] {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(
        `Invalid rating for book "${item.title}": ${item.rating}`
      );
    }
    return item.rating >= 4;
  });
}



type User = { id: number; name: string; email: string; isActive: boolean };

const filterActiveUsers = (userArrays: User[]): User[] => {
  return userArrays.filter((user: User) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bDetails: Book): void => {
  console.log(
    `Title: ${bDetails.title}, Author: ${bDetails.author}, Published: ${
      bDetails.publishedYear
    }, Available: ${bDetails.isAvailable ? "Yes" : "No"}`
  );
};



type arraystType = (string | number)[];

const getUniqueValues = (arr1: arraystType, arr2: arraystType): arraystType => {
  const unique: arraystType = [];

  const addUnique = (value: string | number) => {
    for (let i = 0; i < unique.length; i++) {
      if (unique[i] === value) return;
    }
    unique.push(value);
  };

  for (let i = 0; i < arr1.length; i++) addUnique(arr1[i]);
  for (let i = 0; i < arr2.length; i++) addUnique(arr2[i]);

  return unique;
};



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (
        product.discount !== undefined &&
        product.discount >= 0 &&
        product.discount <= 100
      ) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
};

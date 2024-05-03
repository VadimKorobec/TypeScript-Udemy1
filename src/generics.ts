// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     data.map();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: "Cat" }, { age: 30 });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: "Cat", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Cat"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractAndConvert({ name: "Cat" }, "name");

class DataStorage<T extends string | number | boolean> {
  constructor(private data: T[] = []) {}

  addItem(item: T) {
    if (this.data.includes(item)) {
      console.log("This item already there in data");
      return;
    }
    this.data.push(item);
  }

  removeItem(item: T) {
    if (!this.data.includes(item)) {
      console.log("Sorry this item doesn't exist in data");
      return;
    }
    this.data = this.data.filter((value) => value !== item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Cat");
textStorage.addItem("Shark");
textStorage.addItem("Rabbit");
textStorage.addItem("Rabbit");

textStorage.removeItem("Cat");
textStorage.removeItem("Shark");
textStorage.removeItem("ffhf");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(7);

console.log(numberStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal;
}

const names: Readonly<string[]> = ["Cat", "Sports"];
// names.push("Hanu");
interface User {
  name: string;
  age: number;
}

interface Message {
  id: number;
  text: string;
}

interface State<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

type UserState = State<User>;
type MessageState = State<Message>;

const message: MessageState = {
  loading: false,
  error: null,
  data: {
    id: 1,
    text: "Cat",
  },
};

function identity<T>(arg: T) {
  return arg;
}

const s: string = "hello";
const n: number = 10;

const user: User = {
  name: "Cat",
  age: 30,
};

const r1 = identity(s);
const r2 = identity(n);
const r3 = identity(user);

function getRandomElement<T>(items: T[]) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

const el1 = getRandomElement([1, 2, 3, 4, 5]);
const el2 = getRandomElement(["1", "2", "3", "4", "5"]);

async function fakeReguest() {
  return "string";
}

const b: Promise<string> = fakeReguest();

type Names = string[];
type Names1 = Array<string>;

type Obj = Record<string, number>;

function len<T extends number[] | string>(collection: T) {
  return collection.length;
}

const l1 = len([1, 2, 3]);
const l2 = len("Cat");

class DataCollection<T extends { id: string }> {
  constructor(public data: T[]) {}

  search(id: string) {
    return this.data.find((item) => item.id === id);
  }
}

const newUser = new DataCollection([{ id: "2", text: "user" }]);
const newMessage = new DataCollection([{ id: "1", text: "message" }]);

console.log(newUser.search("2"));

function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
  return obj[prop];
}

const t = getValue({ name: "Cat" }, "name");
console.log(t);

function getKey<T extends object, U extends keyof T>(
  obj: T,
  value: T[U]
): U | null {
  const key = (Object.keys(obj) as Array<U>).find((key) => obj[key] === value);
  return key || null;
}

const key = getKey({ name: "Cat" }, "Cat");

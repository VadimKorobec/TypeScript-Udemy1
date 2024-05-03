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

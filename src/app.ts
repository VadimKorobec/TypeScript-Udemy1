class Department {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const cat = new Department("Cat", 40);
console.log(cat);

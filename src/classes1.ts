// Class

// class Button {
//   text: string;
//   className: string[];
// }

// const b_01 = new Button();
// b_01.text = "Push me";
// b_01.className = ["btn", "btn-success"];
// console.log(b_01);

// class Header {
//   text: string;
//   className: string[];

//   constructor(text: string, className: string[]) {
//     this.text = text;
//     this.className = className;
//   }
// }

// class Btn {
//   text: string;
//   className: string[];

//   create(): HTMLButtonElement {
//     const button = document.createElement("button");
//     button.textContent = this.text;
//     this.className.forEach((item) => button.classList.add(item));
//     return button;
//   }
// }

// const b_02 = new Btn();
// b_02.text = "Button";
// b_02.className = ["btn", "btn-success"];

// console.log(b_02);

// document.body.append(b_02.create());

class ButtonElement {
  text: string;
  className: string[];
  readonly role: string;

  constructor(text: string, className: string[]) {
    this.text = text;
    this.className = className;
    this.role = "button";
  }

  create(): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = this.text;
    button.setAttribute("role", this.role);
    this.className.forEach((item) => button.classList.add(item));
    return button;
  }
}

const b_03 = new ButtonElement("Push me", ["btn", "btn-primary"]);
document.body.append(b_03.create());

const b_04 = new ButtonElement("New button", ["btn", "btn-warning"]);
document.body.append(b_04.create());

// Extends

class T_01 {
  name: string = "";
}

class T_02 extends T_01 {
  email: string = "";
}

const obj_01 = new T_02();
console.log(obj_01);

class T_03 extends T_02 {
  showData(): void {
    console.log(this.name, this.email);
  }
}

const obj_02 = new T_03();
obj_02.name = "test";
obj_02.email = "test@uke.net";
obj_02.showData();

class T_04 extends T_01 {
  email: string = "";

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
  showData(): void {
    console.log({ name: this.name, email: this.email });
  }

  showInfo(): string {
    return `name: ${this.name}, email: ${this.email}`;
  }
}

const obj_03 = new T_04("test", "test@ukr.net");
obj_03.showData();

class T_05 extends T_04 {
  age: number = 0;

  constructor(name: string, email: string, age: number) {
    super(name, email);
    this.age = age;
  }

  showData(): void {
    console.log({
      name: this.name,
      email: this.email,
      age: this.age,
    });
  }

  showInfo(): string {
    const str = super.showInfo();
    return `${str}, age: ${this.age}`;
  }
}

const obj_04 = new T_05("test", "test@ukr.net", 30);
console.log(obj_04.showInfo());

class ElementHTML {
  text: string;
  tag: string = "DIV";

  constructor(text: string) {
    this.text = text;
  }

  render(): HTMLElement {
    const div = document.createElement(this.tag);
    div.textContent = this.text;
    return div;
  }
}

const div_1 = new ElementHTML("Hello World!");
document.body.append(div_1.render());

class ElementHTMLCSS extends ElementHTML {
  className: string[];

  constructor(text: string, className: string[]) {
    super(text);
    this.className = className;
  }

  render(): HTMLElement {
    const div = super.render();
    this.className.forEach((item) => div.classList.add(item));
    return div;
  }
}

const div_2 = new ElementHTMLCSS("Hello World with CSS!", ["styled-div"]);
document.body.append(div_2.render());

class ElementImage extends ElementHTMLCSS {
  src: string = "";

  constructor(src: string, className: string[], text: string) {
    super(text, className);
    this.src = src;
    this.tag = "img";
  }

  render(): HTMLElement {
    const img = document.createElement(this.tag);
    img.setAttribute("src", this.src);
    img.setAttribute("alt", this.text);
    this.className.forEach((item) => img.classList.add(item));
    return img;
  }
}

// Get && Set

class T01 {
  private _n1: number = 33;
  private _n2: number = 55;
  private _n3: number = 0;

  public get n1(): number {
    return this._n1;
  }

  public get n2(): number {
    return this._n2;
  }

  public get n3(): number {
    return this._n3;
  }

  public set n3(value: number) {
    this._n3 = value;
  }
}

const obj1 = new T01();
console.log(obj1.n1);
obj1.n3 = 999;
console.log(obj1.n3);

class T02 extends T01 {
  public get n1(): number {
    return super.n1;
  }

  public set n3(value: number) {
    super.n3 = value;
  }
}

const obj2 = new T02();
console.log(obj2.n1);
obj2.n3 = 9999;
console.log(obj2.n3);

class T03 {
  protected _n1: number = 33;
  protected _n2: number = 55;

  public get n1(): number {
    return this._n1;
  }

  public get n2(): number {
    return this._n2;
  }

  public set n1(value: number) {
    this._n1 = value;
  }
}

const obj3 = new T03();
console.log(obj3.n1);
obj3.n1 = 444;
console.log(obj3.n1);

class T04 extends T03 {
  get n1(): number {
    return this._n1;
  }

  set n1(value: number) {
    this._n1 = value;
  }
}

const obj4 = new T04();
console.log(obj4.n1);
obj4.n1 = 444;
console.log(obj4.n1);

///=======================

abstract class User {
  abstract userName: string;
  abstract userEmail: string;
}

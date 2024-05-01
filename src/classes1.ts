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
}

const obj_04 = new T_05("test", "test@ukr.net", 30);
obj_04.showData();

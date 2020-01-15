// import * as fs from 'fs';


// fs.readFileSync()

class Base {
  constructor(public name: string) {
    this.sayHello();
  }

  private sayHello() {
    console.log('Hello!')
  }
}

class User extends Base {
  constructor(public name: string, public age: number) {
    super(name);
  }
}

const ivan = new User('Ivan', 20);

let a: number;

(ivan as any).sayHello();

// function sum(arg1: number, arg2: number) {
//   return arg1 + arg2;
// }

// const a = sum(231, 23131);

// console.log(a);

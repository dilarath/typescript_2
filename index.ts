// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
/*array*/
var arr: number[] = [1, 2, 3, 4];
console.log(arr.indexOf(3));
console.log(arr[2]);
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('.........................................');
var arr_names: number[] = new Array(4);

for (var i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}

console.log('*******************************8');
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004];
console.log('index is: ', nums.indexOf(1001));
for (j in nums) {
  console.log(nums[j]);
}
function isBigEnough(element, index, array) {
  return element > 10;
}

var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
var pass = [20, 30, 40, 5].every(isBigEnough);
console.log('Test Value :', pass);

let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(num.indexOf(value), value);
});
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log('roots is : ' + roots);
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
console.log('total is : ' + total);
var names: string[] = new Array('Mary', 'Tom', 'Jack', 'Jill');

function disp(arr_names: string[]) {
  for (var i = 0; i < arr_names.length; i++) {
    console.log(names[i]);
  }
}
disp(names);
/*object*/
var person = {
  firstname: 'tom',
  lastname: 'tony',
};
var callperson = function (obj) {
  console.log(obj.firstname);
  console.log(obj.lastname);
};
callperson(person);
/*second way*/
var invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log('first name :' + obj.firstname);
  console.log('last name :' + obj.lastname);
};
invokeperson({ firstname: 'Sachin', lastname: 'Tendulkar' });

interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: 'Tom',
  lastName: 'Hanks',
  sayHi: (): string => {
    return 'Hi there';
  },
};

console.log('Customer Object ');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: 'Jim',
  lastName: 'Blakes',
  sayHi: (): string => {
    return 'Hello!!!';
  },
};

console.log('Employee  Object ');
console.log(employee.firstName);
console.log(employee.lastName);
/*tuple*/

var my_tup = ['apple', 3, 'red'];
console.log(my_tup[0]);
my_tup.push(5);
console.log(my_tup, 'length is:', my_tup.length);
my_tup[4] = 10;
console.log(my_tup);
console.log(my_tup.pop());
var a = [10, 'hello'];
var b = a[0],
  c = a[1];
console.log(b);
console.log(c);
/*union*/
var val: string | number;
val = 12;
console.log('numeric value of val ' + val);
val = 'This is a string';
console.log('string value of val ' + val);

var arr1: number[] | string[];
var i: number;
arr = [1, 2, 4];
console.log('**numeric array**');

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr1 = ['Mumbai', 'Pune', 'Delhi'];
console.log('**string array**');

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
function disp(name: string | string[]) {
  if (typeof name == 'string') {
    console.log(name);
  } else {
    var i;

    for (i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
}
disp('mark');
console.log('Printing names array....');
disp(['Mark', 'Tom', 'Mary', 'John']);
/*interfaces*/
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: 'Tom',
  lastName: 'Hanks',
  sayHi: (): string => {
    return 'Hi there';
  },
};

console.log('Customer Object ');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: 'Jim',
  lastName: 'Blakes',
  sayHi: (): string => {
    return 'Hello!!!';
  },
};
/*classes*/
class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  disp(): void {
    console.log('Engine is  :   ' + this.engine);
  }
}
/*class nd multiple inheritance*/
class Shape {
  Area: number;

  constructor(a: number) {
    this.Area = a;
  }
}

class Circle extends Shape {
  disp(): void {
    console.log('Area of the circle:  ' + this.Area);
  }
}

var obj = new Circle(223);
obj.disp();
/*multi level inheritance in class*/
class Root {
  str: string;
}

class Child extends Root {
  disp() {
    console.log('this is child');
  }
}
class Leaf extends Child {
  disp() {
    super.disp();
    console.log('this is lesf');
  }
}

var obj1 = new Leaf();
obj1.str = 'hello';
console.log(obj1.disp());
console.log(obj1.str);

/*static keyword*/
class StaticMem {
  static num: number;

  static disp(): void {
    console.log('The value of num is' + StaticMem.num);
  }
}

StaticMem.num = 12;
StaticMem.disp();
/*instance of */
class Person {}
var ob = new Person();
var isPerson = ob instanceof Person;
console.log(' obj is an instance of Person ' + isPerson);
class Encapsulate {
  str: string = 'hello';
  private str2: string = 'world';
}

var obj2 = new Encapsulate();
console.log(obj2.str);
console.log(obj2.str2);

/*class and interface*/
interface ILoan {
  interest: number;
}

class AgriLoan implements ILoan {
  interest: number;
  rebate: number;

  constructor(interest: number, rebate: number) {
    this.interest = interest;
    this.rebate = rebate;
  }
}

var obj3 = new AgriLoan(10, 1);
console.log('Interest is : ' + obj3.interest + ' Rebate is : ' + obj3.rebate);
/*module*/
/ IShape.ts 
export interface IShape { 
   draw(); 
}

// Circle.ts 
import shape = require("./IShape"); 
export class Circle implements shape.IShape { 
   public draw() { 
      console.log("Cirlce is drawn (external module)"); 
   } 
} 

// Triangle.ts 
import shape = require("./IShape"); 
export class Triangle implements shape.IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}
   
// TestShape.ts 
import shape = require("./IShape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  

function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle()); 
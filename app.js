//problem 01 : print ('hellow world)
console.log('hellow World')
// alert('hellow World')
// document.write('hellow world');


//problem 02 : add two numbers
const num1 = 53;
const num2 = 23;

const sum1 = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum1);
//or
const num3 = parseInt(prompt('Enter the first number '));
const num4 = parseInt(prompt('Enter the second number '));

const sum2 = num3 + num4;
console.log(`The sum of ${num3} and ${num4} is ${sum2}`);


//problem 03 : squre root of number
const num5 = prompt('enter number for squre:')
const sum3 = Math.sqrt(num5)
console.log(`The square root of ${num5} is ${sum3}`)
//or
const num6 = 16.73
const num7 = -12.83
const num8 = 'hellow'

const result1 = Math.sqrt(num6)
const result2 = Math.sqrt(num7)
const result3 = Math.sqrt(num8)
console.log(`the squre root is ${num6} is ${result1}`)
console.log(`the squre root is ${num7} is ${result2}`)
console.log(`the squre root is ${num8} is ${result3}`)

//problem 04 : the Area of a Triangle
const side1 = 5;
const side2 = 5;
const side3 = 5;

const perimeter = (side1 + side2 + side3) / 2
const areaOfTriangel = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)))
 
console.log(
  `The area of the triangle is ${areaOfTriangel}`
);

//problem 05 :swap two variables
let a = 10
let b = 14
let temp;
//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

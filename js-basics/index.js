//console.log('Hello World');

let firstName = 'Mosh';
console.log(firstName); 


/*const interestRate = 0.3
interestRate =1;
console.log(interestRate);*/

let name = 'Mosh';
let age = 30;
let isApproved = false;
let firstname = undefined;
let lastname = null;

//objects
let person ={
    name: 'Mosh',
    age: 30,
}

// Dot Notation
person.name='John';

//Bracket Notation
person['name']='Mary';

console.log(person.name);
console.log(person['name']);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);


//Functions

// performing a task
function greet(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname);
}
// calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));

greet('John', 'Smith');

// Arithmetic operators
//let x = 10;
/*let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//increment
console.log(++x);
console.log(x++);

//decrement
console.log(--x);
*/
//Assignment Operatos
 //let x = 10;
 //x+= 5;
 //x*=3;

 //comparsion or relational operator
let x = 1;
console.log(x>0);
console.log(x==1);
console.log(x<1);
console.log(x<=1);

// strict equality operator
console.log(x===1);

//lose equality
console.log(1 == 1);

// ternary operators
let points =110;
let type = points > 100 ? 'gold' :'silver';
console.log(type);

//logical AND
console.log(true && false);

let highincome = false;
let goodCreditScore = false;
let eligibleForLoan = highincome && goodCreditScore;
console.log(eligibleForLoan);

//logical OR
console.log(true || false);
console.log(eligibleForLoan);

//logical NOT
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

//logical operators with non-booleans
/* 1. falsy(false)
      undefined,null,0,false(boolean),'',NaN
*/

/*1. truty 
Anything that is not falsy is truty
*/ 
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

//Bitwise operators
// 1 -> 00000001
// 2 -> 00000010
// 0 -> 00000000
console.log(1 | 2); // Bitwise OR 
console.log(1 & 2); // Bitwise AND 

// eg of bitwise operator
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = readPermission | writePermission | myPermission;
console.log(myPermission);

let message =(myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// Exercise - Swapping Variables

let a = 'red';
let b = 'blue';

let c = a;
a=b;
b = c;

console.log(a);
console.log(b);


// control Flow
// if-else
/* if hour is between 6am and 12 pm : Good Morning
if hour is between 12 pm and 6 pm : Good 
otherwise : Good Evening
*/
let hour =10;
if (hour>=6 && hour <12) {
    console.log('Good Morning');
}
else if (hour>=12 && hour <18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}

//Switch...Case
let role;
switch(role) {
    case 'guest' : 
        console.log('Guest User');
        break;
    case 'moderator' :
        console.log('Moderator User');
        break;
    default :
        console.log('Unknown User');
}

// For loop

//for (let i = 1; i < 5; i++) {
    //console.log('Hello World', i);
  //  if(i % 2 !== 0) console.log(i);
//}

// While
//let i = 0;
//while (i < 10) {
  //  console.log(i);
//}

// do while
let i = 0;
do {
    if(i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// infinite loops
// let i=0;
// while (i < 5) {
//     console.log(i);
//    // i++;
// }

// for in 
const persons ={
    name: 'Mosh',
    age: 30,
}

for(let key in persons) {
    console.log(key, persons[key]);
}

let colors = ['red', 'green', 'blue'];
for(let index of colors) {
    console.log(index);
}

// for of
for(let color of colors) {
    console.log(color);
}

// Exercise Max of two numbers 
let number =max(3,2)
console.log(number);

function max(a, b) {
    if (a>b) return a;
    else return b;

    //return (a>b) ? a : b;
}

//Exercise LandScape or Protrait
console.log(isLandscape(800,500))
function isLandscape(width,height) {
    if (width > height) return true;
    return false;
}

// Exercise FizzBuzz
//divisible by 3 fizz
//divisible by 5 buzz
//divisible by 3 and 5 fizzbuzz
//not divisible by 3 or 5 returns the input
//passed anything other than number return 'not a number'
const output = fizzbuzz(false)
console.log(output);

function fizzbuzz(input) {
    if (typeof input !== 'number') 
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'fizzbuzz';

    if (input % 3 === 0) 
        return 'fizz';

    if (input % 5 === 0) 
        return 'buzz';

    return input;   
}

// Exercise Demerit Points
// speed limit = 70
// every 5 km => 1 point
// if more than 12 points -> suspended
checkSpeed(130);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) 
        console.log('Ok');
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12) 
        {
            console.log(' License Suspended');
        }
        else {
            console.log('Points', points);
        }
    }   
}

// Exercise Even Odd
showNumbers(10);
function showNumbers(limit) {
    for(let i = 0; i<=limit; i++) {
        if(i % 2 == 0)
        {
            console.log(i, 'EVEN');
        }
        else
        {
            console.log(i, 'ODD');
        }
    }
}

// Exercise Count Truthy 
const array =  [0,null,undefined,'',2,3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if(value)
            count++
    return count;
}

// Exercise String Properties
const movie ={
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for(let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

// Exercise sum of multiples of 3 and 5
console.log(sum(10))
function sum(limit) {
    let sum = 0;
    for(let i=0; i<=limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum+= i;
    return sum;
}

// Exercise Grade 
const marks = [80,80,50]
console.log(calculateGrade(marks));
// if average 1-59: F
// if average 60-69: D
// if average 70-79: C
// if average 80-89: B
// if average 90-100: A
function calculateGrade(marks) {
    let sum = 0;
    for(let mark of marks)
        sum+= mark;
    let average = sum/marks.length;
    if(average < 60)
        return 'F';
    if(average < 70 )
        return 'D';
    if(average < 80)
        return 'C';
    if(average < 90)
        return 'B';
    return 'A';
}

// Exercise Stars

showStars(5)

function showStars(rows) {
    for(let row =1; row <= rows; row++) {
        let pattern = '';
        for(let i = 1; i <= row; i++){
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Exercise Prime Numbers
showPrimes(10);
function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) {
        let isPrime = true
        for (let factor = 2; factor < number; factor++) {
            if(number % factor === 0){
                isPrime = false;
                break; 
            }  
        }
        if (isPrime) console.log(number);
    }
}

// Objects
//Exercise Address 
let address = {
    street: 'a',
    city: 'b',
    zipcode: 'c'
};
function showAddress(address) {
    for(let key in address){
        console.log(key, address[key]);
    }
}
showAddress(address);

// Exercise Factory and Constructor function
let address1 = createAddress('a', 'b', 'c');
// 1. Factory Function
console.log(address1)
function createAddress(street,city,zipcode) {
    return {
        street,
        city,
        zipcode
    };
}
// 2. Constructor function
let address2 = new Address('a', 'b', 'c');
function Address(street,city,zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// object Equality 
let address3 = new Address1('a', 'b', 'c');
let address4 = new Address1('a', 'b', 'c');

console.log(areEqual(address3, address4));
console.log(areSame(address3, address4));

function Address1(street,city,zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
function areEqual(address3,address4) {
    return address3.street === address4.street && 
        address3.city === address4.city && 
        address3.zipcode === address4.zipcode;
    
}

function areSame(address3,address4) {
return address3 === address4;
}

// Blog post objects
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    isLive: true
};
console.log(post);

// constructor Functions
let post1 = new Post('a','b', 'c');
console.log(post1);
function Post(title,body,author) {
    this.title = title;;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false; 
}

//  Exercise
const arr= [true, false, false, true, false];
console.log(countTrue(arr));
function countTrue(arr) {
    let count = 0;
    for (let value of arr)
        if(value)
            count++
    return count;
}

// Exercise 
const arr1 = [1, 2, 3, 4, 5];
console.log(minMax(arr1));
function minMax(arr1) {
    let min = arr1[0];
    let max = arr1[0];
    for (let value of arr1) {
        if(value < min)
            min = value;
        if(value > max)
            max = value;
    }
    return [min, max];
}

// Exercise
//console.log(greeting('Ryan')); // "Hello, Ryan how are you doing today?"
//console.log(greeting('Sara')); // "Hello, Sara how are you doing today?"
//const greeting = name => {
   // console.log('Hello, ' + name + 'how are you doing today?');
//};

// Exercise
const getCount = str => {
      let count =0;

    }; 
    
    console.log(getCount('my pyx')); // 0
    console.log(getCount('pear tree')); // 4
    console.log(getCount('abracadabra')); // 5
    console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13

// Exercise

const getMiddle = str => {
  // Your solution
}; console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'




// Arrays Exercise
//1. Array from range
const numbers = arrayFromRange(1,4);

console.log(numbers);

function arrayFromRange(min,max) {
    const output = [];
    for(let i= min; i<=max; i++){
        output.push(i);
    }
    return output;
}

// 2. Includes
const number1 = [1,2,3,4];

console.log(includes(number1, 1));

function includes(array, searchElement) {
    for(let element of array) 
        if(element === searchElement)
            return true;
    return false;
}

//3. Except
const number2 = [1,2,3,4];

const output1 = except(number2, [1,2]);

console.log(output1);

function except(array, excluded) {
    const output1 = [];
    for(let element of array)
        if(!excluded.includes(element))
            output1.push(element);
    return output1;
}

// 4. Moving an element
const number3 = [1,2,3,4];

const output2 = move(number3, 0,1);

console.log(output2);

function move(array, index, offset) {
    const output3 = [...array];
    const element = output3.splice(index,1)[0];
    output3.splice(index +offset, 0, element);
    return output3;
}

// exercise
/*Create a function that will receive two arrays and will return an array with elements that are in the first array 
but not in the second*/
let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [-1, 4, 5, 6, 14];

let ar = mergeLeft(ar1, ar2);
console.log(ar);

function mergeLeft(ar1, ar2)
{
    let ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }

    return ar;
}

//Program to print all distinct elements in a given array
 
const array1 = new Array(6, 10, 5, 4, 9, 120, 4, 6, 10);
n = arr.length;
printDistinct(array1, n); 
function  printDistinct(array1, n)
{
    // Pick all elements one by one
    for (let i=0; i<n; i++)
    {
        // Check if the picked element is already printed
        var j;
        for (j=0; j<i; j++)
           if (array1[i] == array1[j])
               break;
   
        // If not printed earlier, then print it
        if (i == j)
          console.log(array1[i] + " ");
    }
}

// Fibonacci series
let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);

for(let i = 2; i < 10; i++)
{
    let fi = f1 + f0;
    console.log(fi);
    
    f0 = f1;
    f1 = fi;
}


printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    let n = 0;
    let i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}


// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

// Symbol
const symbol = Symbol('hello');
console.log(x.description);


//iterators and iterables
let marks1 = [10,20,30]
   let iter = marks1[Symbol.iterator]();
   console.log(iter.next())
   console.log(iter.next())
   console.log(iter.next())
   console.log(iter.next())


//Default parameters

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));  
console.log(sum(7));       
console.log(sum()); 





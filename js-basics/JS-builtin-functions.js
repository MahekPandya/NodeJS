//map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//filter()
//Example1
const number= [1, 2, 3, 4];
const evens = number.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//Examples2
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades);

//reduce()
const num = [1, 2, 3, 4];
const sum = num.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

//forEach()
let student = ['John', 'Sara', 'Jack'];

student.forEach(myFunction);

function myFunction(item, index,arr) {

    console.log(item);
    arr[index] = 'Hello ' + item;
    console.log(item);
}

//slice
let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]

let new_arr3 = languages.slice(0, -1);
console.log(new_arr3);





function add(x,y) {
  let z = x+y;
  return z;
}

console.log("Addition: " + add(6,4));

//concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

//constructor
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

//
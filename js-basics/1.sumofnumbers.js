//Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
const array = [1,2,3,4,5]

let n = array.length
let sum=0

function sumOfNumbers(array) {
    for(let i=0; i<n; i++)
        sum+=array[i]
    console.log(sum)
}

sumOfNumbers(array)

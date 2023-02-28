//Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.

let array = [1,2,3,4,5,6,7,8]
let n = array.length
let newArray = []

function evenNumbers(array) {
    array.forEach((arr) => {
        if(arr % 2 === 0)
            newArray.push(arr)
    })
    console.log(newArray)
}

evenNumbers(array)
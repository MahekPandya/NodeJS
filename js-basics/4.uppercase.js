//Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.

const array = ["mahek","isha","vaishnavi"]
let n = array.length
let newArray = []

function uppercase(array) {
    for(let i = 0; i<n; i++)
        newArray[i] = array[i].toUpperCase()
    console.log(newArray) 
}

uppercase(array)
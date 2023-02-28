//Write a function that takes a string as input and returns the reverse of the string.
const string = "Mahek"
let n = string.length
let newString= ""

reverseString(string)

function reverseString(string) {
    for(let i=n-1; i>=0; i--)
        newString+=string[i]
    console.log(newString)
}
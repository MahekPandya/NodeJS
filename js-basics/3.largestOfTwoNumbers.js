//Write a function that takes two numbers as input and returns the larger of the two numbers.
let number1 = 20
let number2 = 50

function largestOfTwoNumbers(number1,number2) {
    if(number1>number2)
        console.log(number1 + " is larger than " + number2)
    else if(number1<number2)
        console.log(number1 + " is smaller than " + number2)
    else 
        console.log(number1 + " is equla to" + number2)
}

largestOfTwoNumbers(number1,number2)
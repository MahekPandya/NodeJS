//const name = require('./utils.js')
//const add = require('./utils.js')

/*const fs = require('fs')
fs.writeFileSync('notes.txt', 'My name is Mahek.')



//
// Challenge: Append a message to notes.txt
//
//1. Use appendFileSync to append to the file
//2. Run the script
//3. check the work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' I live in Nagpur.' ) */

//const name = 'Mahek'

//console.log(name);

// const sum = add(4, -2)
// console.log(sum)


//
// challenge
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

//const validator = require('validator')

const chalk = require('chalk')

const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

//console.log(validator.isEmail('mahek@example.com'))
//console.log(validator.isURL('https://mead.io'))

//
// Challenge: Use chalk library in your project
//
// 1. install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. use it to ptint the string "Success!" to the console in green
// 4. test your work

//console.log(chalk.green("Success!"))
const greenMsg = chalk.green.bold.inverse('Success!')
console.log(greenMsg)

const redMsg = chalk.red.bold.inverse('Error!')
console.log(redMsg) 
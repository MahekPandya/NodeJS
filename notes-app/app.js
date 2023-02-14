const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')

//console.log(process.argv)

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()

//
// Challenge
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. setup command to support "read" command (print placeholder message for now)

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading a note!')
    }
})

//console.log(yargs.argv)












//const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }





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

// const chalk = require('chalk')

// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

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
// const greenMsg = chalk.green.bold.inverse('Success!')
// console.log(greenMsg)

// const redMsg = chalk.red.bold.inverse('Error!')
// console.log(redMsg) 


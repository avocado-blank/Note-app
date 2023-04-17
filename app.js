const yargs = require('yargs')
const functions = require('./function')
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    functions.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    functions.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'List of note',
  handler: function () {
    functions.listNote()
  },
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    functions.readNote(argv.title)
  },
})
yargs.parse()

// console.log(yargs.argv)

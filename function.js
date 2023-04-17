const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNote()
  const duplicateTitle = notes.find((note) => note.title === title)
  if (!duplicateTitle) {
    notes.push({
      title: title,
      body: body,
    })
    saveNote(notes)
  } else {
    console.log('Title is already taken')
  }
}

const removeNote = (title) => {
  const notes = loadNote()
  const newNotes = notes.filter((note) => note.title !== title)
  saveNote(newNotes)
  notes.length === newNotes.length
    ? console.log('No Note Found')
    : console.log('Remove success')
}

const listNote = () => {
  const notes = loadNote()
  console.log('Header: Yours Notes')
  notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
  const notes = loadNote()
  const wantNote = notes.find((note) => note.title === title)

  if (wantNote) {
    console.log(`Title: ${wantNote.title}`)
    console.log(`Body: ${wantNote.body}`)
  } else {
    console.log('No Note Found')
  }
}
const saveNote = (notes) => {
  const noteJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', noteJson)
}
const loadNote = () => {
  try {
    const bufferNote = fs.readFileSync('notes.json')
    const noteData = JSON.parse(bufferNote.toString())
    return noteData
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
}

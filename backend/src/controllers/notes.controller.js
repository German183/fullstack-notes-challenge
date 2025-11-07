//controlador para las notas
import fs from 'fs'
import path from 'path'

const notesFilePath = path.resolve('./src/db/notes.json')

let notes = []
try {
  const raw = fs.readFileSync(notesFilePath, 'utf8')
  notes = JSON.parse(raw)
} catch (err) {
  // si no existe o hay error, iniciar vacío
  notes = []
}

function saveNotesToFile() {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2), 'utf-8')
}

//obtener todas las notas
const getNotes = (req, res) => {
  res.json(notes)
}

//obtener una nota por id
const getNoteById = (req, res) => {
  const id = parseInt(req.params.id)
  const note = notes.find(n => n.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).send('Nota no encontrada')
  }
}

//crear una nueva nota 
const createNote = (req, res) => {
  const { title, content } = req.body

  if (!title || !content) {
    return res.status(400).send('Faltan datos obligatorios')
  }

  //el id se obtiene sumando 1 al id de la ultima nota
    const newId = notes.length ? (notes[notes.length - 1].id + 1) : 1

    const newNote = {
        id: newId,
        title,
        content
    }

  notes.push(newNote)
  saveNotesToFile()
  res.status(201).json(newNote)
}

//actualizar una nota existente
const updateNote = (req, res) => {
  const id = parseInt(req.params.id)
  const { title, content } = req.body
  const note = notes.find(n => n.id === id)
  if (note) {
    note.title = title
    note.content = content
    saveNotesToFile()
    res.json(note)
  } else {
    res.status(404).send('Nota no encontrada')
  }
}

//eliminar una nota
const deleteNote = (req, res) => {
  const id = parseInt(req.params.id)
  const noteIndex = notes.findIndex(n => n.id === id)
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1)
    saveNotesToFile()
    res.status(204).send()
  } else {
    res.status(404).send('Nota no encontrada')
  }
}

export { getNotes, getNoteById, createNote, updateNote, deleteNote }
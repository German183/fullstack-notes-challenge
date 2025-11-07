const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notes.controller')

//defino las rutas y los metodos HTTP para cada una
router.get('/', notesController.getNotes)
router.get('/:id', notesController.getNoteById)
router.post('/', notesController.createNote)
router.put('/:id', notesController.updateNote)
router.delete('/:id', notesController.deleteNote)

module.exports = router
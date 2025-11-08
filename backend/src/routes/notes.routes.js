// Rutas de la API para manejar notas
import { Router } from 'express';
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/notes.controller.js';

const router = Router();

// Obtener todas las notas
router.get('/', getNotes);

// Obtener una nota específica por su ID
router.get('/:id', getNoteById);

// Crear una nueva nota
router.post('/', createNote);

// Actualizar una nota existente
router.put('/:id', updateNote);

// Eliminar una nota
router.delete('/:id', deleteNote);

export default router;

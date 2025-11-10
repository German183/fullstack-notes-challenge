// Controladores de la API de notas
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Rutas absolutas seguras
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del "archivo base de datos"
const dataPath = path.join(__dirname, '../db/notes.json');

// Función auxiliar para leer las notas
async function readNotes() {
  const data = await fs.readFile(dataPath, 'utf8');
  return JSON.parse(data || '[]');
}

// Función auxiliar para escribir las notas
async function writeNotes(notes) {
  await fs.writeFile(dataPath, JSON.stringify(notes, null, 2));
}

// ✅ Obtener todas las notas
export const getNotes = async (req, res) => {
  try {
    const notes = await readNotes();
    res.json(notes);
  } catch (err) {
    console.error('Error al leer notas:', err);
    res.status(500).json({ message: 'Error al leer notas' });
  }
};

// ✅ Obtener una nota por ID
export const getNoteById = async (req, res) => {
  try {
    const notes = await readNotes();
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).json({ message: 'Nota no encontrada' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Error al leer nota' });
  }
};

// ✅ Crear una nueva nota
export const createNote = async (req, res) => {
  const { title, content, author } = req.body;
  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ message: 'Title y content son obligatorios' });
  }

  try {
    const notes = await readNotes();
    const newNote = {
      id: notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1,
      title,
      content,
      author,
    };
    notes.push(newNote);
    await writeNotes(notes);
    res.status(201).json({ message: 'Nota creada con éxito', note: newNote });
  } catch (err) {
    console.error('Error al crear nota:', err);
    res.status(500).json({ message: 'Error al crear nota' });
  }
};

// ✅ Actualizar una nota existente
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const notes = await readNotes();
    const index = notes.findIndex(n => n.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }
    notes[index] = { ...notes[index], title, content };
    await writeNotes(notes);
    res.json({ message: 'Nota actualizada correctamente', note: notes[index] });
  } catch (err) {
    console.error('Error al actualizar nota:', err);
    res.status(500).json({ message: 'Error al actualizar nota' });
  }
};

// ✅ Eliminar una nota
export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await readNotes();
    const filtered = notes.filter(n => n.id !== parseInt(id));
    if (filtered.length === notes.length) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }
    await writeNotes(filtered);
    res.json({ message: 'Nota eliminada correctamente' });
  } catch (err) {
    console.error('Error al eliminar nota:', err);
    res.status(500).json({ message: 'Error al eliminar nota' });
  }
};

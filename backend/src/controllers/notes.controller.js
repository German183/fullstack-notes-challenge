// Controladores de la API de notas
// Se encargan de manejar la lógica de negocio y leer/escribir los datos del archivo JSON
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Manejo de rutas absolutas (para evitar problemas de importación)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta al archivo donde se almacenan las notas
const dataPath = path.join(__dirname, '../db/notes.json');

// Leer todas las notas desde el archivo
export const getNotes = (req, res) => {
  const data = fs.readFileSync(dataPath, 'utf8');
  const notes = JSON.parse(data);
  res.json(notes);
};

// Obtener una nota por ID
export const getNoteById = (req, res) => {
  const data = fs.readFileSync(dataPath, 'utf8');
  const notes = JSON.parse(data);
  const note = notes.find(n => n.id === parseInt(req.params.id));

  if (!note) return res.status(404).json({ message: 'Nota no encontrada' });
  res.json(note);
};

// Crear una nueva nota
export const createNote = (req, res) => {
  const { title, content, author } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ message: 'Title y content son obligatorios' });
  }

  const data = fs.readFileSync(dataPath, 'utf8');
  const notes = JSON.parse(data);

  const newNote = {
    id: notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1,
    title,
    content,
    author,
  };

  notes.push(newNote);
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));

  res.status(201).json({ message: 'Nota creada con éxito', note: newNote });
};

// Actualizar una nota existente
export const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const data = fs.readFileSync(dataPath, 'utf8');
  const notes = JSON.parse(data);
  const index = notes.findIndex(n => n.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Nota no encontrada' });
  }

  notes[index] = { ...notes[index], title, content };
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));

  res.json({ message: 'Nota actualizada correctamente', note: notes[index] });
};

// Eliminar una nota
export const deleteNote = (req, res) => {
  const { id } = req.params;

  const data = fs.readFileSync(dataPath, 'utf8');
  let notes = JSON.parse(data);

  const filtered = notes.filter(n => n.id !== parseInt(id));

  if (filtered.length === notes.length) {
    return res.status(404).json({ message: 'Nota no encontrada' });
  }

  fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2));
  res.json({ message: 'Nota eliminada correctamente' });
};

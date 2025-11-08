// Importa dependencias principales
import express from 'express'
import cors from 'cors'
import notesRoutes from './routes/notes.routes.js'

const app = express()
const PORT = process.env.PORT || 4000

// Middleware para permitir CORS y parsear JSON
app.use(cors())
app.use(express.json())

// Rutas principales de la API
app.use('/api/notes', notesRoutes)

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint no encontrado' })
})

// Middleware general para manejo de errores del servidor
app.use((err, req, res, next) => {
  console.error('Error:', err.message)
  res.status(err.status || 500).json({ message: err.message || 'Error interno del servidor' })
})

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 4000


const routes = require('./routes/notes.routes.js')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/notes', routes)

app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    const status = err.status || 500
    res.status(status).json({ error: err.message || 'Error interno del servidor' })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
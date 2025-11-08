Notes API — Backend

API REST desarrollada con Express.js para gestionar notas.
Forma parte de un proyecto fullstack (Frontend: Vue + Backend: Express).

✨ Tecnologías utilizadas

🟢 Node.js
🟣 Express.js
🟡 CORS
📄 JSON (como base de datos simple)
🔁 Nodemon (entorno de desarrollo)

⚙️ Instalación y ejecución
# 1️⃣ Clonar el repositorio
git clone https://github.com/German183/fullstack-notes-challenge.git

# 2️⃣ Entrar al directorio del backend
cd backend

# 3️⃣ Instalar dependencias
npm install express cors
npm install --save-dev nodemon


# 4️⃣ Ejecutar el servidor en desarrollo
npm run dev

# 🔸 o en producción
npm start

🌐 Endpoints disponibles
Método	Endpoint	Descripción
GET	/api/notes	Devuelve todas las notas
GET /api/notes/:id	Devuelve una nota específica
POST /api/notes	Crea una nueva nota
PUT	/api/notes/:id	Actualiza una nota existente
DELETE /api/notes/:id	Elimina una nota
🧾 Estructura de una nota
{
  "id": 1,
  "title": "Ejemplo de nota",
  "content": "Este es el contenido de la nota"
}

📁 Estructura del proyecto
backend/
 ├── src/
 │    ├── server.js
 │    ├── controllers/
 │    │    └── notes.controller.js
 │    ├── db/
 │    │    └── notes.json
 │    └── routes/
 │         └── notes.routes.js
 ├── package-lock.json
 ├── package.json
 └── README.md

🧩 Descripción de los archivos principales
🧠 server.js

Archivo principal del servidor. Configura Express, los middlewares, las rutas y el puerto de escucha.

📬 routes/notes.routes.js

Define los endpoints y asocia cada ruta con su función controladora.

🧰 controllers/notes.controller.js

Contiene la lógica de negocio: leer, escribir, actualizar y eliminar notas en el archivo notes.json.

💾 db/notes.json

Base de datos simple donde se guardan las notas en formato JSON.

👨‍💻 Scripts disponibles
| Script        | Descripción                                               |
| ------------- | --------------------------------------------------------- |
| npm run dev   | Ejecuta el servidor con **nodemon** (recarga automática). |
| npm start     | Ejecuta el servidor en modo producción.                   |

🧪 Ejemplo de uso

✏️ Crear una nota

Request:

POST /api/notes
Content-Type: application/json


Body:

{
  "title": "Nueva nota",
  "content": "Contenido de prueba"
}


Response:

{
  "message": "Nota creada con éxito",
  "note": {
    "id": 3,
    "title": "Nueva nota",
    "content": "Contenido de prueba"
  }
}

🛠️ Actualizar una nota

Request:

PUT /api/notes/3
Content-Type: application/json


Body:

{
  "title": "Nota editada",
  "content": "Contenido actualizado"
}


Response:

{
  "message": "Nota actualizada correctamente",
  "note": {
    "id": 3,
    "title": "Nota editada",
    "content": "Contenido actualizado"
  }
}

❌ Eliminar una nota

Request:

DELETE /api/notes/3


Response:

{
  "message": "Nota eliminada correctamente"
}

📋 Obtener todas las notas

Request:

GET /api/notes


Response:

[
  {
    "id": 1,
    "title": "Primera nota",
    "content": "Contenido de ejemplo"
  },
  {
    "id": 2,
    "title": "Segunda nota",
    "content": "Más contenido"
  }
]

👤 Autor

Germán Bermúdez
Challenge técnico Full Stack (Express + Vue)

📧 germanbermudez33@gmail.com

🪪 Licencia

Este proyecto se distribuye bajo licencia ISC.
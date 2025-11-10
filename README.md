# 🌙 Fullstack Notes Challenge

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Vue.js](https://img.shields.io/badge/Vue.js-3-blue)
![Express](https://img.shields.io/badge/Express-4.18+-lightgrey)
![License](https://img.shields.io/badge/License-MIT-yellow)

> ✨ Una aplicación **Full Stack** moderna para crear, editar, eliminar y buscar notas.  
> Desarrollada con **Node.js**, **Express** y **Vue 3 (Vite)**, ideal para practicar arquitectura fullstack, CRUDs y consumo de APIs REST.

---

## 🧠 Descripción General

Este proyecto es una **Single Page Application (SPA)** desarrollada con **Vue 3**, **Vite** y **Vue Router**, que se comunica con una **API RESTful** construida en **Node.js y Express**.
La aplicación permite gestionar notas con un sistema CRUD completo (crear, leer, actualizar y eliminar) y una función de búsqueda dinámica.

Todo el enrutamiento del frontend se maneja en el lado del cliente, sin recargar la página, garantizando una navegación fluida y una experiencia moderna de usuario.
Los datos se almacenan de forma local en un archivo JSON, por lo que no requiere base de datos externa.

---

## 🚀 Características Principales

✅ **CRUD completo** — Crear, leer, actualizar y eliminar notas.  
🔎 **Búsqueda instantánea** — Filtra en tiempo real por título o contenido.  
💾 **Persistencia local** — Guarda datos en un archivo JSON sin necesidad de base externa.  
🎨 **Diseño intuitivo** — Interfaz limpia, responsiva y moderna.  
⚡ **Rápido y simple** — Configuración ligera con Node + Vite.


## 🧱 Estructura del Proyecto

```bash
fullstack-notes-challenge/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── notes.controller.js      # Lógica principal de notas
│   │   ├── db/
│   │   │   └── notes.json               # Base de datos local
│   │   ├── routes/
│   │   │   └── notes.routes.js          # Endpoints de la API
│   │   └── server.js                    # Servidor principal
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/                  # Componentes reutilizables
│   │   │   ├── AppFooter.vue
│   │   │   ├── AppHeader.vue
│   │   │   ├── NoteCard.vue
│   │   │   └── NoteModal.vue
│   │   ├── views/                       # Vistas principales
│   │   │   ├── HomeView.vue
│   │   │   └── NoteView.vue
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
│
└── README.md
````

---

## ⚙️ Tecnologías Utilizadas

### 🖥️ **Backend**

* **Node.js (v20+)**
* **Express** → Framework para crear la API REST
* **CORS** → Permite la comunicación con el frontend
* **Nodemon** → Auto-reinicio durante desarrollo
* **JSON local** → Persistencia sin base de datos

### 💻 **Frontend**

* **Vue.js 3** → Framework de UI reactivo
* **Vite** → Compilador y servidor ultrarrápido
* **Vue Router** → Navegación SPA
* **Axios** → Manejo de peticiones HTTP

---

## 📋 Requisitos Previos

* [Node.js](https://nodejs.org/) **v20 o superior**
* npm (incluido con Node.js)

---

## 🏁 Instalación y Ejecución

### 🧩 1. Clonar el repositorio

```bash
git clone https://github.com/German183/fullstack-notes-challenge.git
cd fullstack-notes-challenge
```

### ⚙️ 2. Iniciar el backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponible en:
🌐 **[http://localhost:4000](http://localhost:4000)**

### 💻 3. Iniciar el frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación disponible en:
🌐 **[http://localhost:5173](http://localhost:5173)**

---

## 📖 Uso de la Aplicación

🆕 **Crear nota:** clic en “+ Nueva Nota” y completa el formulario.
🔍 **Buscar:** escribí texto en la barra de búsqueda para filtrar.
✏️ **Editar o eliminar:** usá los botones de cada nota.
♻️ **Actualización automática:** los cambios se reflejan al instante.

---

## 🔌 Endpoints de la API

**Base URL:** `http://localhost:4000/api/notes`

| Método     | Ruta   | Descripción                  | Ejemplo                                         |
| ---------- | ------ | ---------------------------- | ----------------------------------------------- |
| **GET**    | `/`    | Obtiene todas las notas      | `[{"id":1,"title":"Nota 1","content":"Texto"}]` |
| **GET**    | `/:id` | Obtiene una nota por ID      | `{ "id":1,"title":"Nota 1" }`                   |
| **POST**   | `/`    | Crea una nueva nota          | `{ "title":"Nueva","content":"..." }`           |
| **PUT**    | `/:id` | Actualiza una nota existente | `{ "title":"Editada" }`                         |
| **DELETE** | `/:id` | Elimina una nota             | `{ "message":"Nota eliminada" }`                |

> 🧠 **Nota:** No se necesitan variables de entorno.
> El proyecto usa `db/notes.json` como base de datos local.

---

## 🧑‍💻 Autor

**Germán Bermudez**
📧 [germanbermudez33@gmail.com](mailto:germanbermudez33@gmail.com)
🌐 [GitHub](https://github.com/German183)

---

⭐ Si te gustó este proyecto, ¡considerá dejar una estrella en el repo!
<script>
export default {
  name: 'NoteView',
  data() {
    return {
      note: { title: '', content: '', author: '' },
      loading: true,
    }
  },
  async mounted() {
    const id = this.$route.params.id
    try {
      const res = await fetch(`http://localhost:4000/api/notes/${id}`)
      const data = await res.json()
      this.note = data
    } catch (err) {
      console.error('Error fetching note:', err)
    } finally {
      this.loading = false
    }
  },
  methods: {
    async updateNote() {
      const id = this.$route.params.id
      const res = await fetch(`http://localhost:4000/api/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.note),
      })
      if (res.ok) {
        alert('✅ Nota actualizada correctamente')
      }
    },
    async deleteNote() {
      const id = this.$route.params.id
      if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        const res = await fetch(`http://localhost:4000/api/notes/${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          alert('🗑 Nota eliminada')
          this.$router.push('/')
        }
      }
    },
  },
}
</script>

<template>
  <div class="note-view">
    <div v-if="loading" class="loading">Cargando nota...</div>

    <div v-else>
      <div class="header">
        <button class="btn back" @click="$router.push('/')">← Volver</button>
        <div class="actions">
          <button class="btn delete" @click="deleteNote">🗑 Eliminar</button>
          <button class="btn save" @click="updateNote">💾 Guardar</button>
        </div>
      </div>
      
      <input
        v-model="note.title"
        placeholder="Título de la nota"
        class="title-input"
      />

      <textarea
        v-model="note.content"
        placeholder="Escribí tu contenido..."
        class="content-input"
      ></textarea>

      <p v-if="note.author" class="note-author">✍️ Creado por <strong>{{ note.author }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.note-view {
  padding: 1.5rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.loading {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.note-author {
  text-align: right;
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  font-style: italic;
}

/* Botones principales */
.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn {
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
}

.btn.back {
  background: #7f8c8d;
}

.btn.save {
  background: #42b883;
}


.btn.delete {
  background: #e74c3c;
}

.btn:hover {
  opacity: 0.9;
  transform: scale(1.05);
}


.title-input{
  font-size: 1rem;
  font-weight: 700;
  padding: 0.6rem;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background: transparent;
}

.content-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: none;
  outline: none;
  line-height: 1.6;
  transition: border-color 0.3s;
  background: #fff;
}

.title-input:focus,
.content-input:focus {
  border-color: #42b883;
  outline: none;
  box-shadow: 0 0 4px rgba(66, 184, 131, 0.3);
}

.content-input {
  min-height: 200px;
  resize: vertical;
}

/* 🔹 Tablet */
@media (min-width: 640px) {

  .btn {
    font-size: 1.1rem;
    padding: 1rem 1.7rem;
    border-radius: 12px;
  }

  .title-input,
  .content-input {
    padding: 1rem 1.2rem;
    font-size: 1.05rem;
  }
}

/* 🔹 Desktop */
@media (min-width: 1024px) {
  .note-view {
    padding: 2rem;
  }

  .btn {
    font-size: 1.15rem;
    padding: 1.1rem 2rem;
  }

  .textarea-content {
    min-height: 250px;
  }
}
</style>


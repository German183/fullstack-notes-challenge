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
* {
  box-sizing: border-box;
}

.note-view {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  padding: 1.5rem;
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
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
}

.title-input {
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0.6rem;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
}

.title-input:focus {
  border-color: #42b883;
}

.content-input {
  width: 100%;
  min-height: 300px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  resize: none;
  outline: none;
  line-height: 1.6;
  box-sizing: border-box;
  background: transparent;
}

.content-input:focus {
  border-color: #42b883;
  box-shadow: 0 0 4px rgba(66, 184, 131, 0.3);
}

.note-author {
  text-align: right;
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  font-style: italic;
}

.btn {
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: 0.3s;
}

.btn.back {
  background: #ccc;
}

.btn.save {
  background: #42b883;
  color: white;
}

.btn.delete {
  background: #e74c3c;
  color: white;
}

.btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>

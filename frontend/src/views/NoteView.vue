<script>
export default {
  name: 'NoteView',
  data() {
    return {
      note: { title: '', content: '' },
    }
  },
  async mounted() {
    const id = this.$route.params.id
    const res = await fetch(`http://localhost:4000/api/notes/${id}`)
    const data = await res.json()
    this.note = data
  },
  methods: {
    async updateNote() {
      const id = this.$route.params.id
      const res = await fetch(`http://localhost:4000/api/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.note),
      })
      if (res.ok) alert('Nota actualizada correctamente ✅')
    },
    async deleteNote() {
      const id = this.$route.params.id
      if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        const res = await fetch(`http://localhost:4000/api/notes/${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          alert('Nota eliminada 🗑')
          this.$router.push('/')
        }
      }
    },
  },
}
</script>

<template>
  <div class="note-view">
    <div class="header">
      <button class="btn back" @click="$router.push('/')">← Back</button>
      <div class="actions">
        <button class="btn delete" @click="deleteNote">🗑 Delete</button>
        <button class="btn save" @click="updateNote">💾 Save</button>
      </div>
    </div>

    <input
      v-model="note.title"
      placeholder="Note title"
      class="title-input"
    />
    <textarea
      v-model="note.content"
      placeholder="Write your content..."
      class="content-input"
    ></textarea>
  </div>
</template>

<style scoped>
.note-view {
  max-width: 700px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.title-input {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
}

.content-input {
  min-height: 300px;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
}

.btn {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
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
  opacity: 0.9;
}
</style>

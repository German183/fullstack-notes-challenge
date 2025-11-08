<script>
import NoteCard from '../components/NoteCard.vue'
import NoteModal from '../components/NoteModal.vue'

export default {
  name: 'HomeView',
  components: { NoteCard, NoteModal },
  data() {
    return {
      notes: [],
      mostrarModal: false,
    }
  },
  methods: {
    async getNotes() {
      const res = await fetch('http://localhost:4000/api/notes')
      const data = await res.json()
      this.notes = data
    },
    goToDetail(id) {
      this.$router.push(`/nota/${id}`)
    },
    async createNote(NewNote) {
      const res = await fetch('http://localhost:4000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(NewNote),
      })
      const data = await res.json()
      this.notes.push(data)
      this.mostrarModal = false
    },
  },
  mounted() {
    this.getNotes()
  },
}
</script>

<template>
  <div class="container">
    <h1>Mis Notas</h1>

    <button @click="mostrarModal = true" class="btn">+ Nueva Nota</button>

    <div v-if="notes.length" class="notas">
      <NoteCard
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @abrir="goToDetail"
      />
    </div>

    <p v-else>No hay notas todavía.</p>

    <NoteModal
      v-if="mostrarModal"
      @save="createNote"
      @close="mostrarModal = false"
    />
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
}
.notas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.btn:hover {
  background: #2d9d75;
}
</style>

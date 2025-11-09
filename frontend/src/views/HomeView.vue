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
      searchTerm: '',
      loading: true,
    }
  },
  computed: {
    filteredNotes() {
      if (!this.searchTerm.trim()) return this.notes
      return this.notes.filter(note =>
        note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    },
  },
  methods: {
    async getNotes() {
      try {
        const res = await fetch('http://localhost:4000/api/notes')
        const data = await res.json()
        this.notes = data
      } catch (err) {
        console.error('Error al obtener notas:', err)
      } finally {
        this.loading = false
      }
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
      if (res.ok) {
        // Refresca lista desde el servidor
        await this.getNotes()
        this.mostrarModal = false
      }
    },
  },
  mounted() {
    this.getNotes()
  },
}
</script>

<template>
  <div class="home">
    <div class="header">
      <h1>🗒 Notas guardadas</h1>
      <button @click="mostrarModal = true" class="btn-add">+ Nueva Nota</button>
    </div>

    <div v-if="loading" class="loading">Cargando notas...</div>
    
    <div v-else>
      <div class="search-box">
        <i class="search-icon">🔍</i>
        <input
          v-model="searchTerm"
          placeholder="Buscar notas..."
          class="search-input"
          type="text"
        />
      </div>
      <div v-if="notes.length">
        
        <div v-if="filteredNotes.length" class="notas-grid">
          <NoteCard
          v-for="note in filteredNotes"
          :key="note.id"
          :note="note"
          @abrir="goToDetail"
          />
        </div>
        <p v-else class="empty">No se encontraron notas que coincidan con la búsqueda.</p>
      </div>
      <p v-else class="empty">Todavía no hay notas creadas...</p>
    </div>

    <NoteModal
      v-if="mostrarModal"
      @save="createNote"
      @close="mostrarModal = false"
    />
  </div>
</template>

<style scoped>
.home {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
  font-weight: 700;
}

.btn-add {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s;
}

.btn-add:hover {
  background: #369a6e;
  transform: scale(1.05);
}

.notas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
}

.empty {
  text-align: center;
  color: #777;
  font-size: 1.1rem;
  margin-top: 2rem;
}

.loading {
  text-align: center;
  color: #888;
  font-size: 1.1rem;
}

/* 🔍 Buscador */
.search-box {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 1.1rem;
}

.search-input {
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 0.95rem;
  transition: all 0.2s;
  background: #fff;
}

.search-input:focus {
  border-color: #42b883;
  outline: none;
  box-shadow: 0 0 5px rgba(66, 184, 131, 0.3);
}
</style>

<script>
import NoteCard from '../components/NoteCard.vue'
import NoteModal from '../components/NoteModal.vue'
import api from '../api/api.js'

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
        const res = await api.get('/')
        const data = await res.data
        this.notes = data
      } catch (err) {
        alert('Error al obtener notas')
      } finally {
        this.loading = false
      }
    },
    goToDetail(id) {
      this.$router.push(`/nota/${id}`)
    },
    async createNote(newNote) {
      try {
        await api.post('/', newNote)
        this.mostrarModal = false
        await this.getNotes() // refrescamos la lista
        alert('✅ Nota creada correctamente')
      } catch (err) {
        alert('Error al crear nota')
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
/* Estilos base para móviles (mobile first) */
.home {
  padding: 1.5rem 1rem;
  margin: 0 auto;
  max-width: 1000px;
}

/* Header centrado, botón debajo */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 700;
}


.btn-add {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-add:hover {
  background: #369a6e;
  transform: scale(1.05);
}

/* Buscador */
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

/* Grid base: 1 columna en móvil */
.notas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

/* Estado vacío / cargando */
.empty, .loading {
  text-align: center;
  color: #777;
  font-size: 1rem;
  margin-top: 1.5rem;
}

/* Ajustes para tablets (min-width: 640px) */
@media (min-width: 640px) {
  h1 {
    font-size: 2rem;
  }

  .btn-add {
    font-size: 1.1rem;
    padding: 1rem 1.8rem;
    border-radius: 12px;
  }

  .notas-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }
}


/* Ajustes para computadoras (min-width: 1024px) */
@media (min-width: 1024px) {
  .home {
    padding: 2rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  .btn-add {
    font-size: 1.15rem;
    padding: 1.1rem 2rem;
    border-radius: 14px;
  }

  .notas-grid {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 1.8rem;
  }
}
</style>



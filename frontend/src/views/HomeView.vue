<script>
import NoteCard from '../components/NoteCard.vue'

export default {
  name: 'HomeView',
  components: { NoteCard },
  data() {
    return {
      notas: [],
    }
  },
  methods: {
    async obtenerNotas() {
      const res = await fetch('http://localhost:4000/api/notes')
      const data = await res.json()
      this.notas = data
    },
    irADetalle(id) {
      this.$router.push(`/nota/${id}`)
    },
    async crearNota() {
      const nueva = {
        title: 'Nueva Nota',
        content: ' ',
      }
      const res = await fetch('http://localhost:4000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nueva),
      })
      const data = await res.json()
      this.$router.push(`/nota/${data.id}`)
    },
  },
  mounted() {
    this.obtenerNotas()
  },
}
</script>

<template>
  <div class="container">
    <h1>Mis Notas</h1>

    <button @click="crearNota" class="btn">+ Nueva Nota</button>

    <div v-if="notas.length" class="notas">
      <NoteCard
        v-for="nota in notas"
        :key="nota.id"
        :nota="nota"
        @abrir="irADetalle"
      />
    </div>

    <p v-else>No hay notas todavía.</p>
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

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    abrirNota() {
      this.$emit('abrir', this.note.id)
    },
  },
}
</script>

<template>
  <div class="card" @click="abrirNota">
    <h2 class="title">{{ note.title || 'Sin título' }}</h2>
    <p class="content">
      {{ note.content ? note.content.slice(0, 100) + (note.content.length > 100 ? '...' : '') : 'Sin contenido' }}
    </p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.card h2,
.card p {
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.title {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.content {
  color: #555;
  font-size: 0.95rem;
  flex-grow: 1;
  margin-bottom: 1rem;
  white-space: pre-line;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-size: 0.85rem;
  color: #888;
}

.btn-view {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-view:hover {
  background: #369a6e;
  transform: scale(1.05);
}
</style>

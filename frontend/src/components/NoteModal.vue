<script>
export default {
  name: 'NoteModal',
  emits: ['save', 'close'],
  data() {
    return {
      note: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    saveNote() {
      this.$emit('save', this.note)
      this.note = { title: '', content: '' }
    },
  },
}
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <h2>Nueva Nota</h2>

      <form @submit.prevent="saveNote">
        <input
          v-model="note.title"
          placeholder="Titulo"
          required
        />
        <textarea
          v-model="note.content"
          placeholder="Escribe tu nota aquí..."
          required
        ></textarea>

        <div class="buttons">
          <button type="submit" class="btn primary">Guardar</button>
          <button type="button" class="btn" @click="$emit('close')">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input, textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
textarea {
  height: 100px;
  resize: none;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
.btn {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.btn.primary {
  background: #42b883;
  color: white;
}
.btn:hover {
  opacity: 0.8;
}
</style>

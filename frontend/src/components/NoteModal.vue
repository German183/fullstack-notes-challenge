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
  mounted() {
    this.$nextTick(() => {
      const firstInput = this.$el.querySelector('input')
      if (firstInput) firstInput.focus()
    })
  },
  methods: {
    saveNote() {
      if (!this.note.title.trim() || !this.note.content.trim()) return
      this.$emit('save', this.note)
      this.note = { title: '', content: '' }
    },
  },
}
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <h2 class="title">📝 Nueva Nota</h2>

      <form @submit.prevent="saveNote">
        <input
          v-model="note.title"
          placeholder="Título de la nota"
          required
        />
        <textarea
          v-model="note.content"
          placeholder="Escribe algo interesante..."
          required
        ></textarea>

        <div class="buttons">
          <button type="button" class="btn cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn primary">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Fondo del modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.25s ease-in-out;
}

/* Caja del modal */
.modal {
  background: white;
  border-radius: 14px;
  padding: 2rem;
  width: 50%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  text-align: center;
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

/* Inputs */
input,
textarea {
  width: 90%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  border-color: #42b883;
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

textarea {
  height: 120px;
  resize: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Botones */
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.btn {
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn.primary {
  background: #42b883;
  color: white;
}

.btn.primary:hover {
  background: #2f8e68;
}

.btn.cancel {
  background: #e0e0e0;
  color: #333;
}

.btn.cancel:hover {
  background: #cacaca;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

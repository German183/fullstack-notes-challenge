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

      const userName = localStorage.getItem('userName')

      const noteWithAuthor = {
        ...this.note,
        author: userName,
      }

      this.$emit('save', noteWithAuthor)
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
        <input v-model="note.title" placeholder="Título de la nota" required />
        <textarea v-model="note.content" placeholder="Escribe algo interesante..." required></textarea>

        <div class="buttons">
          <button type="button" class="btn cancel" @click="$emit('close')">Cancelar</button>
          <button type="submit" class="btn primary">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  /* Estilos base para móviles (mobile first) */
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

  .modal {
    background: white;
    border-radius: 14px;
    padding: 1.5rem;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    animation: scaleIn 0.25s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    text-align: center;
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border-color 0.2s;
  }

  input:focus,
  textarea:focus {
    border-color: #42b883;
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
  }

  textarea {
    height: 100px;
    resize: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .btn {
    border: none;
    padding: 0.5rem 0.8rem;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
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

  /* Ajustes para tablets (min-width: 768px) */
  @media (min-width: 768px) {
    .modal {
      padding: 2rem;
      max-width: 480px;
    }

    .title {
      font-size: 1.4rem;
    }

    input,
    textarea {
      padding: 0.75rem;
      font-size: 1rem;
    }

    textarea {
      height: 120px;
    }

    .buttons {
      gap: 0.6rem;
    }

    .btn {
      padding: 0.6rem 1rem;
    }
  }

  /* Ajustes para computadoras (min-width: 1024px) */
  @media (min-width: 1024px) {
    .modal {
      padding: 2.5rem;
      max-width: 520px;
    }

    .title {
      font-size: 1.5rem;
    }

    input,
    textarea {
      padding: 0.8rem;
      font-size: 1.05rem;
    }

    textarea {
      height: 140px;
    }

    .buttons {
      gap: 0.7rem;
    }

    .btn {
      padding: 0.7rem 1.2rem;
    }
  }
</style>

<script>
export default {
    name: 'NotaCard',
    props: {
        nota: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
  <div class="nota" @click="$emit('abrir', nota.id)">
    <h2 class="titulo">{{ nota.title }}</h2>
    <p class="contenido">{{ nota.content.slice(0, 100) }}...</p>
  </div>
</template>

<style scoped>
.nota {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.nota:hover {
  transform: scale(1.03);
}

/* 🔹 Trunca el título si se pasa de una línea */
.titulo {
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;         /* evita salto de línea */
  overflow: hidden;            /* oculta lo que sobra */
  text-overflow: ellipsis;     /* agrega los "..." */
  margin-bottom: 0.5rem;
}

/* 🔹 Limita el preview del contenido */
.contenido {
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 3;              
  -webkit-line-clamp: 3;       /* muestra hasta 3 líneas */
  -webkit-box-orient: vertical;
}
</style>

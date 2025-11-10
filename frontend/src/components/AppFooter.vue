<script>
export default {
  name: 'AppFooter',
}
</script>

<template>
  <footer class="app-footer">
    <p>Hecho por <strong>Germán Bermudez</strong> — Challenge Vue + Node</p>
  </footer>
</template>

<style scoped>

  /* Estilos base para móviles (mobile first) */
  .app-footer {
    text-align: center;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    color: #777;
    border-top: 1px solid #eee;
    background: #fff;
    flex-shrink: 0;
  }

  /* Ajustes para tablets (min-width: 768px) */
  @media (min-width: 768px) {
    .app-footer {
      padding: 1rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  /* Ajustes para computadoras (min-width: 1024px) */
  @media (min-width: 1024px) {
    .app-footer {
      padding: 1.25rem 2rem;
      font-size: 0.95rem;
    }
  }
</style>

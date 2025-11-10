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
.app-footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #eee;
  background: #fff;
  flex-shrink: 0; /* importante */
  /* NO usar margin-top: auto aquí */
}
</style>

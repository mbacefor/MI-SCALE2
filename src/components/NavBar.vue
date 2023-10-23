<template>
  <nav>
    <h1>{{ title }}</h1>
    <ul v-if="bleDeviceName">
      <li>ID Balança Conectada: {{ bleDeviceName }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
    bleDeviceName: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
}

li {
  margin-right: 1rem;
  color: #e74c3c;
}
</style>

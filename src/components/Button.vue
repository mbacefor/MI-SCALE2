<template>
  <button @click="onClick()">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Salvar!",
    },
  },
  methods: {
    onClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid #e74c3c;
  padding: 10px;
  margin: 5px;
  background-color: #e74c3c;
  color: #fff;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

button:disabled {
  background: grey;
  border: 1px solid grey;
  cursor: not-allowed;
}
</style>

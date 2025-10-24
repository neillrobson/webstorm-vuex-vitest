<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
const increment = () => store.commit('increment');
const decrement = () => store.commit('decrement');
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Count: {{ count }}
    <button @click="increment">Increment</button>
    <button @click="decrement">Increment</button>
  </p>
</template>

<style scoped></style>

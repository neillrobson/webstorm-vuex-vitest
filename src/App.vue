<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
const increment = () => store.commit('increment');
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Count: {{ count }}
    <button @click="increment">Increment</button>
  </p>
</template>

<style scoped></style>

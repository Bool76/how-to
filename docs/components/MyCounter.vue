<script setup>
import { ref } from "vue";

const count = ref(0);

function incrementCount() {
  count.value++;
}
</script>

<template>
  <button @click="incrementCount">Count: {{ count }}</button>
</template>

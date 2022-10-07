<script setup>
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Contador ({{ counter }})</h2>
    <div class="space-x-3">
      <button class="bg-blue-500 text-white px-3 rounded-lg" @click="counter++">
        +
      </button>
      <button class="bg-blue-500 text-white px-3 rounded-lg" @click="counter--">
        -
      </button>
    </div>
  </div>
</template>

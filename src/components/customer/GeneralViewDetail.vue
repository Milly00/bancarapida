<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  balance: {
    type: Object,
  },
})

const amount = computed(() =>
  Intl.NumberFormat('es-CO').format(props.balance.amount)
)
</script>

<template>
  <section class="bg-primary text-white rounded-xl p-5 space-y-3 w-80">
    <p class="font-xs">Su saldo actual</p>
    <h2 class="font-bold text-4xl">${{ amount }}</h2>
    <slot></slot>
  </section>
</template>

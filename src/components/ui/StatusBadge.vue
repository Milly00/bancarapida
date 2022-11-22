<script setup>
import Badge from './Badge.vue'

const props = defineProps({
  status: String,
})

const variant = {
  Aprobada: 'green',
  Rechazada: 'red',
  aprove: 'green',
  refused: 'red'
}
</script>

<template>
  <Badge :variant="variant[props.status]">{{ props.status }}</Badge>
</template>

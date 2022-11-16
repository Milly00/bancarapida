<script setup>
const props = defineProps({
  variant: {
    type: String,
    validators: (value) => ['green', 'red'].includes(value),
  },
})
const style = {
  green: 'bg-green-100 text-green-500',
  red: 'bg-red-100 text-red-500',
}
</script>
<template>
  <span
    class="rounded-md px-2 py-px mx-auto text-sm"
    :class="style[props.variant]"
  >
    <slot></slot>
  </span>
</template>

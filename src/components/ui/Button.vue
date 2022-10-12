<script setup>
const styles = {
  white:
    'block w-full rounded-lg bg-white text-black font-medium py-2 hover:bg-gray-100',
}

const props = defineProps({
  variant: {
    type: String,
    validators: (value) => ['primary', 'white'].includes(value),
  },
})
</script>

<template>
  <button :class="styles[props.variant]">
    <slot />
  </button>
</template>

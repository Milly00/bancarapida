
<template>
  <button
    class='bg-primary text-white text-xl py-3 rounded-md'
  >
    {{ content }}
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

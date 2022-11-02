<template>
  <button
    class='text-primary w-fit'
  >
    {{ content }}
  </button>
</template>

<script>

export default {
  name: 'LinkButton',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

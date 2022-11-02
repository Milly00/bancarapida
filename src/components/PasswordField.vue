<template>
  <div
    class='flex flex-col'
  >
    <div class='flex w-full justify-between'>
      <label
        class='text-gray-600 text-lg mb-2'
      >
        {{ label }}
      </label>
    </div>

    <input 
      class='bg-slate-100 px-4 py-2 rounded-md'
      type='password'
      :name='name'
      :value='value'
      :placeholder='placeholder'
    />
  </div>
</template>

<script>

export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
}
</script>

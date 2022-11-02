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

      
      <!--
        - TODO:
        - añadir un icono de info 
      -->

      <Tooltip
        :text='info'
      >
        <p>
          info
        </p>
      </Tooltip>
    </div>

    <input 
      class='bg-slate-100 px-4 py-2 rounded-md'
      type='text'
      :name='name'
      :value='value'
      :placeholder='placeholder'
    />
  </div>
</template>

<script>
import Tooltip from '../components/Tooltip.vue'

export default {
  name: 'TextField',
  components: {
    Tooltip,
  },
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
    info: {
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

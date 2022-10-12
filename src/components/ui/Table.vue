<script setup>
const props = defineProps({
  headings: Array,
})
</script>

<template>
  <table
    class="border-t border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative"
  >
    <thead>
      <tr class="text-left">
        <th
          class="sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-900 font-medium text-sm"
          v-for="heading in props.headings"
          :key="heading"
        >
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

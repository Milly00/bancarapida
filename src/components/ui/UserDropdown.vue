<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  user: Object,
})
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="inline-flex w-full justify-center rounded-md text-sm font-medium"
      >{{ props.user.user_name }}</MenuButton
    >
    <MenuItems
      class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <MenuItem v-slot="{ active }">
        <RouterLink
          class="hover:text-white hover:bg-primary text-black rounded-md"
          to="/logout"
        >
          Cerrar sesión
        </RouterLink>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

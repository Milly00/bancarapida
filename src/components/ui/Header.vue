<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { TheLogo, UserDropdown } from '@/components/ui'
import { useAuth } from '@/composables'

const user = useAuth()
</script>

<template>
  <nav class="p-4 flex items-center bg-white justify-between">
    <RouterLink to="/">
      <div class="flex gap-2 items-center">
        <TheLogo class="h-8 w-8" />
        <span class="font-bold text-xl text-gray-900 tracking-wide">BANKR</span>
      </div>
    </RouterLink>
    <div>
      <UserDropdown :user="user" />
    </div>
  </nav>
</template>

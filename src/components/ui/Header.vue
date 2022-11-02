<script setup>
import { RouterLink } from 'vue-router'
import { TheLogo } from '@/components/ui'
</script>

<template>
  <nav class="p-4 flex items-center bg-white">
    <div class="flex gap-2 items-center">
      <TheLogo class="h-8 w-8" />
      <span class="font-bold text-xl text-gray-900 tracking-wide">BANKR</span>
    </div>
    <RouterLink to="/">Go Home</RouterLink>
  </nav>
</template>

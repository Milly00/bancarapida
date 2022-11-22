<script setup>
import { RouterLink } from 'vue-router'
import { useIsAuth } from '@/composables'

useIsAuth()
</script>

<template>
  <main class="h-screen w-full flex flex-col items-center justify-center">
    <h1 class="text-4xl font-black">Banca rapida</h1>
    <div class="flex gap-2">
      <RouterLink to="/auth/login">Iniciar sesión</RouterLink>
      <RouterLink to="/auth/register">Registrarse</RouterLink>
    </div>
  </main>
</template>

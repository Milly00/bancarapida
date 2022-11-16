<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  localStorage.removeItem('user')
  router.push('/auth/login')
})
</script>

<template>
  <div>Cerrando sesión...</div>
</template>

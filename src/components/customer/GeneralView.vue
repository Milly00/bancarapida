<script setup>
import GeneralViewDetail from './GeneralViewDetail.vue'
import { Button } from '../ui/'
import { store } from '@/store/userStore'
</script>

<template>
  <div class="bg-gray-100 w-full">
    <div class="container mx-auto py-12 space-y-4">
      <h1 class="text-gray-900 font-bold text-4xl">Vista General</h1>
      <div class="flex items-start gap-4">
        <GeneralViewDetail :balance="store.balance.general">
          <Button variant="white">Agregar dinero</Button>
          <Button variant="white">Retirar dinero</Button>
          <Button variant="white">Transferir dinero</Button>
        </GeneralViewDetail>
        <GeneralViewDetail :balance="store.balance.credit">
          <Button variant="white">Solicitar crédito</Button>
        </GeneralViewDetail>
      </div>
    </div>
  </div>
</template>

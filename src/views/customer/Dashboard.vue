<script setup>
import { GeneralView, LatestTransactions } from '@/components/customer'
import { Layout, Header } from '@/components/ui'
</script>

<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <GeneralView />
    <LatestTransactions />
  </Layout>
</template>

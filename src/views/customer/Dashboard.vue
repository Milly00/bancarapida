<script setup>
import { GeneralView, LatestTransactions } from '@/components/customer'
import { Layout } from '@/components/ui'
import { Navbar } from '../../components/ui/'
</script>

<template>
  <Layout>
    <!--
    <template #header>
      <Header></Header>
    </template>-->
    <Navbar></Navbar>

    <GeneralView />
    <LatestTransactions />
  </Layout>
</template>

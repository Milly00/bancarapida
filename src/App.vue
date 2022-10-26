<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Navbar } from './components/ui';
</script>

<template>
  <header>

    <div>
      <Navbar></Navbar>
      <!--
      <nav class="p-4">
        <RouterLink to="/">Home</RouterLink>
      </nav>-->
    </div>
  </header>
  <RouterView />
</template>

<script></script>
<template>
      <Navbar></Navbar>
  
  <div class="w-full">
    <section class="container mx-auto py-3 space-y-4">
        
    </section>
    </div>
</template>
<script>
import { Navbar } from '../../components/ui/'

export default {
  components: {
    Navbar,
  },
  created() {
    this.getTransaction()
  },
  methods: {
    getTransaction() {},
  },
}
</script>

<script></script>
<template>
      
      <Navbar></Navbar>
  
  <div class="w-full">
    <section class="container mx-auto py-3 space-y-4">
        <h2>Tipo de transacción</h2>
        <h2>tipo de cuenta</h2>
        <h2>Monto</h2>
        <h2>Nombre del propietario de la Cuenta</h2>
        <h2>Nombre de Banco</h2>
        <h2>Estado de la transaccion</h2>
        <h2>Descripcion</h2>
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

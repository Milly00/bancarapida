<template>
  <!-- Esta vista fue creada por Camilo Paternina y su equipo de trabajo -->
  <div>
    <Navbar></Navbar>
    <BarraAdmin></BarraAdmin>
    <div class="container">
      <div class="row justify-content-around">
        
        <h2
          class="col-4 text-center"
          style="
            font-family: 'Poppins Medium' !important;
            font-size: 25px !important;
          "
        >
          Tabla consolidado
        </h2>
        <TableAdmin></TableAdmin>
      </div>
      <div class="row justify-content-center mt-3">
        <h2
          class="text-center"
          style="
            font-family: 'Poppins Medium' !important;
            font-size: 25px !important;
          "
        >
          Graficas
        </h2>
        <GraficaRetiros class="col-6"></GraficaRetiros>
        <h3 class="col-4 pt-5" style="
            font-family: 'Poppins Medium' !important;
            font-size: 15px !important;
          ">Gráfica de Operaciones/Mes <br/><br/>En esta gráfica se muestra la relación que hay entre el número de transacciones y los meses del año.</h3>
        
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar } from '@/components/ui'
import TableAdmin from '@/components/admin/table.components.vue'
import GraficaRetiros from '@/components/admin/graficaRetiros.components.vue'
import BarraAdmin from '@/components/admin/barra.components.vue'
//import GraficaCreditos from '@/components/admin/graficaCreditos.components.vue'

export default {
  name: 'ConsolidadoComponent',
  components: {
    Navbar,
    TableAdmin,
    GraficaRetiros,
    BarraAdmin,
    
  },
}
</script>

<style scoped>
</style>
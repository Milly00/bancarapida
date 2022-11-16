<script>
import { GeneralView } from '@/components/customer';
import { StatusBadge, Table, TableItem, TableItemCell } from '@/components/ui'
import axios from 'axios'

export default {
  components: {
    GeneralView,StatusBadge,Table,TableItem,TableItemCell
  },
  created(){
    this.getExtTransactions();
  },
  data() {
    return {
      transacciones: [],
    }
  },
  methods: {
    getExtTransactions() {
    return axios.get('http://localhost:8000/api/externalTransAll').then(res => {
      this.transacciones = res.data;
      //console.log(this.transacciones);
    })
  }
  }
}
</script>

<template>
  <GeneralView />
  
  <div class="w-full">
    <section class="container mx-auto py-12 space-y-4">
      <h2 class="text-gray-900 font-bold text-2xl">Últimas transacciones</h2>
      <Table :headings="['ID', 'Tipo', 'Fecha', 'Banco', 'Cantidad', 'Estado']">
        <TableItem v-for="movement in transacciones" :key="movement.id">
          <TableItemCell>{{ movement.id }}</TableItemCell>
          <TableItemCell>{{ movement.transactioType }}</TableItemCell>
          <!-- <TableItemCell>{{
            Intl.DateTimeFormat('es-CO', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(movement.date)
          }}</TableItemCell> -->
          <TableItemCell>{{
            movement.date
          }}</TableItemCell>
          <TableItemCell>{{ movement.bankName }}</TableItemCell>
          <TableItemCell
            >${{
              Intl.NumberFormat('es-CO').format(movement.amount)
            }}</TableItemCell
          >
          <TableItemCell>
            <StatusBadge :status="movement.status" />
          </TableItemCell>
        </TableItem>
      </Table>
    </section>
  </div>

</template>

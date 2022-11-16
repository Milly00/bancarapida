<!--
<template>
  <Navbar></Navbar>

  <div class="w-full">
    <section class="container mx-auto py-12 space-y-4">
      <h2 class="text-gray-900 font-bold text-2xl">Últimas transacciones</h2>
      <div class="grid">
        <router-link to="/external-transaction">
          <Button class="w-60" type="button" variant="primary">
            Realizar Transacción
          </Button></router-link
        >
      </div>
      <Table
        :headings="[
          'ID',
          'Nombre Titular',
          'No Documento',
          'Tipo Documento',
          'Tipo de transacción',
          'Tipo de Cuenta',
          'Fecha',
          'Banco',
          'Cantidad',
          'Estado',
        ]"
      >
        <TableItem
          v-for="movement in store.transactionsExternal"
          :key="movement.id"
        >
          <TableItemCell>{{ movement.id }}</TableItemCell>
          <TableItemCell>{{ movement.EAOwnerName }}</TableItemCell>
          <TableItemCell>{{ movement.EAOwnerId }}</TableItemCell>
          <TableItemCell>{{ movement.EAOwnerIdType }}</TableItemCell>

          <TableItemCell>{{ movement.transactionType }}</TableItemCell>
          <TableItemCell>{{ movement.EAType }}</TableItemCell>

          <TableItemCell>{{
            Intl.DateTimeFormat('es-CO', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(movement.date)
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
-->

<script >
import { GeneralView } from '@/components/customer';
import { StatusBadge, Table, TableItem, TableItemCell } from '@/components/ui'
import axios from 'axios'

export default {
  components: {
    GeneralView,
    StatusBadge,
    Table,
    TableItem,
    TableItemCell,
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

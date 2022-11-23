<script setup>
</script>

<template>
  <Navbar></Navbar>

  <div class="w-full">
    <section class="container mx-auto py-12 space-y-4">
      <h2 class="text-gray-900 font-bold text-2xl">Solicitudes de credito</h2>
      <Table
        :headings="['ID', 'identityNumber', 'identity Type','Name','lastname','Cantidad Solicitada', 'Descripcion de Credito', 'Estado',]"
      >
        <TableItem v-for="movement in transacciones" :key="movement.id">
          <TableItemCell>{{ movement.idCredit }}</TableItemCell>
          <TableItemCell>{{ movement.identityNumber }}</TableItemCell>
          <TableItemCell>{{ movement.identityType }}</TableItemCell>
          <TableItemCell>{{ movement.name }}</TableItemCell>
          <TableItemCell>{{ movement.lastname}}</TableItemCell>
          <TableItemCell>{{ movement.amountRequired }}</TableItemCell>
          <TableItemCell>{{ movement.description }}</TableItemCell>
          <TableItemCell>{{ movement.status }}</TableItemCell>
        </TableItem>
      </Table>
    </section>
  </div>
</template>


<script>
import { GeneralView } from '@/components/customer'
import { Navbar } from '../../components/ui/'

import { StatusBadge, Table, TableItem, TableItemCell } from '@/components/ui'
import axios from 'axios'
//import { RouterLink } from 'vue-router'
export default {
  components: {
    Navbar,
    StatusBadge,
    Table,
    TableItem,
    TableItemCell,
  },
  created() {
    this.getExtTransactions()
  },
  data() {
    return {
      transacciones: [],
    }
  },
  methods: {
    getExtTransactions() {
      return axios
        .get('http://localhost:8000/view/credit')
        .then((res) => {
          this.transacciones = res.data
          //console.log(this.transacciones);
        })
    },
  },
}
</script>
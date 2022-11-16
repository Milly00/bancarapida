<script setup>
import { store } from '@/store/userStore'
import { StatusBadge, Table, TableItem, TableItemCell } from '@/components/ui'

</script>

<template>
  <div class="w-full">
    <section class="container mx-auto py-12 space-y-4">
      <h2 class="text-gray-900 font-bold text-2xl">Últimas transacciones</h2>
      <Table :headings="['ID', 'Tipo', 'Fecha', 'Banco', 'Cantidad', 'Estado']">
        <TableItem v-for="movement in store.latestMovements" :key="movement.id">
          <TableItemCell>{{ movement.id }}</TableItemCell>
          <TableItemCell>{{ movement.type }}</TableItemCell>
          <TableItemCell>{{
            Intl.DateTimeFormat('es-CO', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(movement.date)
          }}</TableItemCell>
          <TableItemCell>{{ movement.bank }}</TableItemCell>
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

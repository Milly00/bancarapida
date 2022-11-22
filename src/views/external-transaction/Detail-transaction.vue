<script></script>
<template>
  <Navbar></Navbar>

  <div class="w-full">
    <section class="container mx-auto py-3 space-y-4">
      <div class="p-8 rounded-lg shadow-2xl shadow-blue-500/50">
        <div class="flex flex-row ...">
          <div class="mx-2">
            <h2 class="text-lg">Nombre del propietario de la Cuenta</h2>
            <p>{{ this.nameOwner }}</p>
          </div>
          <div class="mx-2">
            <h2 class="text-lg">Nombre de Banco</h2>
            <p>{{ bank }}</p>
          </div>
          <div class="mx-2">
            <h2 class="text-lg">Estado de la transacción</h2>
            <StatusBadge :status="status" />
          </div>
        </div>
        <div class="flex flex-row ...">
          <div class="mx-2">
            <h2 class="text-lg">Fecha</h2>
            <p>{{ date }}</p>
          </div>
          <div class="mx-2">
            <h2 class="text-lg">Tipo de transacción</h2>
            <p>{{ typeTransfer }}</p>
          </div>
          <div class="mx-2">
            <h2 class="text-lg">Tipo de cuenta</h2>
            <p>{{ typeAccount }}</p>
          </div>
          <div class="mx-2">
            <h2 class="text-lg">Monto</h2>
            <p>{{ amount }}</p>
          </div>
        </div>
        <div class="flex flex-row ...">
          <div class="mx-2">
            <h2 class="text-lg">Descripción</h2>
            {{ description }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'
import { Navbar } from '../../components/ui/'
import axios from 'axios'
import { StatusBadge } from '@/components/ui'

export default {
  components: {
    Navbar,
    StatusBadge,
  },
  data() {
    return {
      typeTransfer: '',
      typeAccount: '',
      amount: 0,
      bank: '',
      status: '',
      description: '',
      date: '',
      nameOwner: '',
      idOwner: '',
      typeIdOwner: '',
      detailTrans: {},
    }
  },
  created() {
    this.getTransaction()
  },
  methods: {
    getTransaction() {
      let id = this.$route.params.id
      return axios
        .post('http://localhost:8000/api/externalTransById', { id_account: id })
        .then((res) => {
          //console.log(this.transacciones);
          this.detailTrans = res.data.data
          this.typeTransfer = res.data.data.transactioType
          this.typeAccount = res.data.data.EAType
          this.amount = res.data.data.amount
          this.bank = res.data.data.bankName
          this.status = res.data.data.status
          this.description = res.data.data.description
          this.date = res.data.data.date
          this.nameOwner = res.data.data.EAOwnerName
          this.idOwner = res.data.data.EAOwnerId
          this.typeIdOwner = res.data.data.EAOwnerTypeId
        })
    },
  },
}
</script>

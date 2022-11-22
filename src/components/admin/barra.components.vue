<template>
  <div class="row justify-content-around color-gris-claro mt-3 p-4 mb-1">
    <div class="col-3 rounded shadow bg-white row pt-2 align-items-center">
      <div class="col-10">
        <h3 class="font-subtitulos">Transf. realizadas</h3>
        <h3 class="color-gris font-subtitulos">{{ transfRealizadas }}</h3>
      </div>
      <div class="col-2">
        <span class="material-symbols-outlined"> paid </span>
      </div>
    </div>

    <div class="col-3 rounded shadow bg-white row align-items-center pt-2">
      <div class="col-10">
        <h3 class="font-subtitulos">Total usuarios</h3>
        <h3 class="color-gris font-subtitulos">{{ totalusuario }}</h3>
      </div>
      <div class="col-2">
        <span class="material-symbols-outlined"> how_to_reg </span>
      </div>
    </div>

    <div class="col-3 rounded shadow bg-white row align-items-center pt-2">
      <div class="col-10">
        <h3 class="font-subtitulos">Nuevos usuarios</h3>
        <h3 class="color-gris font-subtitulos">{{ nuevosclientes }}</h3>
      </div>
      <div class="col-2">
        <span class="material-symbols-outlined"> account_circle </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'BarraAdmin',
  data: () => ({
    totalusuario: 0,
    nuevosclientes: 0,
    dinerototal: 0,
    tranferenciasinternas: 0,
    transaferenciasexternas: 0,
    Pagos: 0,
    transfRealizadas: 0,
  }),
  methods: {
    async getTotalUsuario(api) {
      /** SI FUNCIONA */
      await axios.get(api).then((result) => {
        for (var i = 0; i < result.data.length; i++) {
          this.totalusuario += 1
        }
      })
    },
    async nuevosClientes(api) {
      /** Revisar */
      const fecha = new Date()
      await axios.get(api).then((Nclientes) => {
        (Nclientes.data).forEach((element) => {
          console.log(new Date(element.creationDate).getDate() +" " + fecha.getDate())
          if (
            (new Date(element.creationDate).getDate() == fecha.getDate())
          ) {
            this.nuevosclientes += 1
          }
        })
      })
    },
    async transferenciasRealizadas(
      apitranferenciasinternas,
      apipagos,
      apitranferenciasexrenas
    ) {
      await axios.get(apitranferenciasinternas).then((result) => {
        /** Arreglar */
        this.tranferenciasinternas = result.data.length
      })
      await axios.get(apipagos).then((result) => {
        /** Arreglar */
        this.Pagos = result.data.length
      })
        await axios.get(apitranferenciasexrenas).then((result) => {
          /** Arreglar */
          this.transaferenciasexternas = result.data.length
          
        })
        this.transfRealizadas = this.tranferenciasinternas + this.Pagos + this.transaferenciasexternas;
    },
  },
   created() {
     this.getTotalUsuario('http://localhost:8000/todos/usuarios')
     this.nuevosClientes('http://localhost:8000/todos/usuarios')
     this.transferenciasRealizadas(
      'http://localhost:8000/todos/transferencias/internas',
      'http://localhost:8000/todos/pagos',
      'http://localhost:8000/todos/transferencias/externas'
    )
  },
}
</script>

<style scoped>
.color-gris-claro {
  background-color: rgb(221, 221, 221);
}

.color-gris {
  color: rgb(151, 151, 151);
}

.font-subtitulos {
  font-family: 'Poppins Medium' !important;
  font-size: 15px !important;
}
</style>

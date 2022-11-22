<template>
  <div class="grafica">
    <canvas id="myChart2" width="200" height="200"></canvas>
  </div>
</template> 

<script>
import axios from 'axios'
import Chart from 'chart.js/auto'
let enero = 0
let febrero = 0
let marzo = 0
let abril = 0
let mayo = 0
let junio = 0
let julio = 0
let agosto = 0
let septiembre = 0
let octubre = 0
let noviembre = 0
let diciembre = 0

export default {
  name: 'GraficaRetiros',
  data() {
    return {
      apiPayment: 'http://localhost:8000/todos/pagos',
      apiCredit: 'http://localhost:8000/todos/creditos',
      apiExternalTransfer:
        'http://localhost:8000/todos/transferencias/externas',
      apiInternalTransfer:
        'http://localhost:8000/todos/transferencias/internas',
    }
  },
  async mounted() {
    await this.getOperaciones(
      this.apiPayment,
      this.apiCredit,
      this.apiExternalTransfer,
      this.apiInternalTransfer
    ) // llamamos a la funcion que hace las peticiones

    this.getGrafica()
  },
  methods: {
    async getOperaciones(
      apiPayment,
      apiCredit,
      apiExternalTransfer,
      apiInternalTransfer
    ) {
      // const date = new Date();
      await axios
        .get(apiPayment)
        .then((result) => {
          // llamamos a la api de los payment
          result.data.forEach((element) => {
            const dateRegister = new Date(element.date) // obtenemos la fecha de registro en la respuesta de la api
            console.log(dateRegister.getMonth())
            console.log(typeof dateRegister.getMonth())
            if (dateRegister.getMonth() == 0) {
              enero += 1
            } else if (dateRegister.getMonth() == 1) {
              febrero += 1
            } else if (dateRegister.getMonth() == 2) {
              marzo += 1
            } else if (dateRegister.getMonth() == 3) {
              abril += 1
            } else if (dateRegister.getMonth() == 4) {
              mayo += 1
            } else if (dateRegister.getMonth() == 5) {
              junio += 1
            } else if (dateRegister.getMonth() == 6) {
              julio += 1
            } else if (dateRegister.getMonth() == 7) {
              agosto += 1
            } else if (dateRegister.getMonth() == 8) {
              septiembre += 1
            } else if (dateRegister.getMonth() == 9) {
              octubre += 1
            } else if (dateRegister.getMonth() == 10) {
              noviembre += 1
            } else if (dateRegister.getMonth() == 11) {
              diciembre += 1
            } else {
              console.log('No se pudo obtener el mes')
            }
          })
        })
        .catch((error) => {
          console.log('error', error)
        })
      await axios.get(apiCredit).then((result) => {
        result.data.forEach((element) => {
          const dateRegister = new Date(element.requestDate) // obtenemos la fecha de registro en la respuesta de la api
          if (dateRegister.getMonth() == 0) {
            enero += 1
          } else if (dateRegister.getMonth() == 1) {
            febrero += 1
          } else if (dateRegister.getMonth() == 2) {
            marzo += 1
          } else if (dateRegister.getMonth() == 3) {
            abril += 1
          } else if (dateRegister.getMonth() == 4) {
            mayo += 1
          } else if (dateRegister.getMonth() == 5) {
            junio += 1
          } else if (dateRegister.getMonth() == 6) {
            julio += 1
          } else if (dateRegister.getMonth() == 7) {
            agosto += 1
          } else if (dateRegister.getMonth() == 8) {
            septiembre += 1
          } else if (dateRegister.getMonth() == 9) {
            octubre += 1
          } else if (dateRegister.getMonth() == 10) {
            noviembre += 1
          } else if (dateRegister.getMonth() == 11) {
            diciembre += 1
          } else {
            console.log('No se pudo obtener el mes')
          }
        })
      })
      await axios.get(apiExternalTransfer).then((result) => {
        // llamamos a la api de los nose
        result.data.forEach((element) => {
          const dateRegister = new Date(element.date) // obtenemos la fecha de registro en la respuesta de la api
          if (dateRegister.getMonth() == 0) {
            enero += 1
          } else if (dateRegister.getMonth() == 1) {
            febrero += 1
          } else if (dateRegister.getMonth() == 2) {
            marzo += 1
          } else if (dateRegister.getMonth() == 3) {
            abril += 1
          } else if (dateRegister.getMonth() == 4) {
            mayo += 1
          } else if (dateRegister.getMonth() == 5) {
            junio += 1
          } else if (dateRegister.getMonth() == 6) {
            julio += 1
          } else if (dateRegister.getMonth() == 7) {
            agosto += 1
          } else if (dateRegister.getMonth() == 8) {
            septiembre += 1
          } else if (dateRegister.getMonth() == 9) {
            octubre += 1
          } else if (dateRegister.getMonth() == 10) {
            noviembre += 1
          } else if (dateRegister.getMonth() == 11) {
            diciembre += 1
          } else {
            console.log('No se pudo obtener el mes')
          }
        })
      })
      await axios.get(apiInternalTransfer).then((result) => {
        // llamamos a la api de los nose
        result.data.forEach((element) => {
          const dateRegister = new Date(element.date) // obtenemos la fecha de registro en la respuesta de la api
          if (dateRegister.getMonth() == 0) {
            enero += 1
          } else if (dateRegister.getMonth() == 1) {
            febrero += 1
          } else if (dateRegister.getMonth() == 2) {
            marzo += 1
          } else if (dateRegister.getMonth() == 3) {
            abril += 1
          } else if (dateRegister.getMonth() == 4) {
            mayo += 1
          } else if (dateRegister.getMonth() == 5) {
            junio += 1
          } else if (dateRegister.getMonth() == 6) {
            julio += 1
          } else if (dateRegister.getMonth() == 7) {
            agosto += 1
          } else if (dateRegister.getMonth() == 8) {
            septiembre += 1
          } else if (dateRegister.getMonth() == 9) {
            octubre += 1
          } else if (dateRegister.getMonth() == 10) {
            noviembre += 1
          } else if (dateRegister.getMonth() == 11) {
            diciembre += 1
          } else {
            console.log('No se pudo obtener el mes')
          }
        })
      })
    },
    getGrafica() {
      const ctx2 = document.getElementById('myChart2') // 2d es para graficas de lineas
      const labels = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ] //Aqui van los labels
      let data = {
        // datos de la grafica
        labels: labels, //Aqui va la data
        datasets: [
          {
            // datos de la grafica
            label: 'Gráfica de Número de Operaciones en Mes', // titulo de la grafica
            data: [
              enero,
              febrero,
              marzo,
              abril,
              mayo,
              junio,
              julio,
              agosto,
              septiembre,
              octubre,
              noviembre,
              diciembre,
            ], //Aqui va el numero de operaciones por mes
            fill: true, // No rellenar el area
            borderColor: 'rgb(75, 192, 192)', //Aqui va el color
            tension: 0.1, //Aqui va el grosor
          },
        ],
      }
      const myChart2 = new Chart(ctx2, {
        // ctx es el contexto
        type: 'line', //Aqui va el tipo de grafica
        data: data, //Aqui va la data
      })
      myChart2 // llamamos a la grafica
    },
  },
}
</script>
  
<style scoped>
.grafica{
  height: 400px;
  width: 400px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
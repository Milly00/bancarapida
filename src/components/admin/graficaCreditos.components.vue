<template>
  <div class="grafica">
    <canvas id="myChart" width="200" height="200"></canvas>

  </div>

</template>
<script>
import axios from 'axios'
import Chart from 'chart.js/auto';
let numstatus = 0; //Para el numero de creditos aprobados
let numstatuspendient = 0; //Para el numero de creditos aprobados
let numstatusrejected = 0; //Para el numero de creditos aprobados
let numstatusTranbank = 0; //Para el numero de transacciones a otros bancos
let numRetiros = 0; //Para el numero de retiros
let numConsignes = 0; //Para el numero de consignaciones
export default {
  name: 'GraficaCreditos',
  props: {
    msg2: String
  }, data() {
    return {
      apiPayment: 'http://localhost:8000/todos/pagos',
      apiCredit: 'http://localhost:8000/todos/creditos',
      apiExternalTransfer: 'http://localhost:8000/todos/transferencias/externas',
      apiInternalTransfer: 'http://localhost:8000/todos/transferencias/internas',
    }
  },
  async mounted() {
    await this.getOperaciones(this.apiPayment, this.apiCredit, this.apiExternalTransfer, this.apiInternalTransfer); // llamamos a la funcion que hace las peticiones
   
    this.getGrafica();


  },
  methods: {
    async getOperaciones(apiCreditstatus, apiCredit, apiExternalTransfer) {
      // const date = new Date();
      await axios.get(apiCreditstatus).then((result) => { // llamamos a la api de los Creditstatus
        (result.data).forEach((element) => {
          let checkStatus = element.status;// obtenemos el estado del credito en la respuesta de la api
          if (checkStatus == 'Aprobado') {
            numstatus += 1;
          }
          else if (checkStatus == 'Pendiente') {
            numstatuspendient += 1;
          }
          else {
            numstatusrejected += 1;
          }
        })

      });
      await axios.get(apiExternalTransfer).then((result) => {
        console.log(result.data[0]); // llamamos a la api de los credit
        (result.data).forEach((element) => {
          let statusTranbank = element.status; // obtenemos la informacion del estado de las transacciones en la respuesta de la api
          if (statusTranbank == 'Aprobado') {
            numstatusTranbank += 1;
          }
          else {
            numstatusTranbank += 0;
          }
        })
      })
      await axios.get(apiExternalTransfer).then((result) => { // llamamos a la api de la transferencia externa
        (result.data).forEach((element) => {
          let extRetiros = element.transactionType; // obtenemos la informacion del estado de las transacciones en la respuesta de la api
          if (extRetiros == 'ingreso') {
            numRetiros += 1;
          }
          else if (extRetiros == 'egreso') {
            numRetiros += 0;
          }
        })
      })
      await axios.get(apiExternalTransfer).then((result) => { // llamamos a la api de la transferencia externa
        (result.data).forEach((element) => {
          let transConsignes = element.transactionType
          let statConsignes = element.status; // obtenemos la informacion del estado de las transacciones en la respuesta de la api
          if (transConsignes == 'consignacion' && statConsignes == 'aprobado') {
            numConsignes += 1;
          }
          else {
            numConsignes += 0;
          }
        })
      })
    },
    getGrafica() {
      const ctx = document.getElementById('myChart'); // 2d es para graficas de lineas
      const myChart = new Chart(ctx, { // ctx es el contexto
        type: 'bar', // tipo de grafica
        data: { // datos de la grafica
          labels: ['credit. aprob', 'credit. pendie', 'N° consig', 'N° transf ext'],
          datasets: [{ // datos de la grafica
            label: 'Gráfica de operaciones realizadas en el día', // titulo de la grafica
            data: [numstatus, numstatuspendient, numstatusrejected, numstatusTranbank, numRetiros, numConsignes], //Aqui va el numero de operaciones por mes
            backgroundColor: [ // color de la grafica
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1
          }]


        },
        options: { // opciones de la grafica
          scales: { // escalas de la grafica
            yAxes: [{ // eje y
              ticks: { // ticks de la grafica
                beginAtZero: true // empieza en 0
              }
            }]
          }
        }
      }
      )
      return myChart
    }


  }

}











</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grafica{
  height: 350px;
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
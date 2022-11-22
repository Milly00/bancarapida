<template>
  <!-- Este componente fue creado por Camilo Paternina y su equipo -->
  <div>
    <table class="table p-4 shadow col-12">
      <thead>
        <tr>
          <th scope="col">Operaciones</th>
          <th scope="col">Enero</th>
          <th scope="col">Febrero</th>
          <th scope="col">Marzo</th>
          <th scope="col">Abril</th>
          <th scope="col">Mayo</th>
          <th scope="col">Junio</th>
          <th scope="col">Julio</th>
          <th scope="col">Agosto</th>
          <th scope="col">Septiembre</th>
          <th scope="col">Octubre</th>
          <th scope="col">Noviembre</th>
          <th scope="col">Diciembre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Nuevos usuarios</th>
          <td>{{ enero[0] }}</td>
          <td>{{ febrero[0] }}</td>
          <td>{{ marzo[0] }}</td>
          <td>{{ abril[0] }}</td>
          <td>{{ mayo[0] }}</td>
          <td>{{ junio[0] }}</td>
          <td>{{ julio[0] }}</td>
          <td>{{ agosto[0] }}</td>
          <td>{{ septiembre[0] }}</td>
          <td>{{ octubre[0] }}</td>
          <td>{{ noviembre[0] }}</td>
          <td>{{ diciembre[0] }}</td>
        </tr>

        <tr>
          <th>Transf externas</th>
          <td>{{ enero[1] }}</td>
          <td>{{ febrero[1] }}</td>
          <td>{{ marzo[1] }}</td>
          <td>{{ abril[1] }}</td>
          <td>{{ mayo[1] }}</td>
          <td>{{ junio[1] }}</td>
          <td>{{ julio[1] }}</td>
          <td>{{ agosto[1] }}</td>
          <td>{{ septiembre[1] }}</td>
          <td>{{ octubre[1] }}</td>
          <td>{{ noviembre[1] }}</td>
          <td>{{ diciembre[1] }}</td>
        </tr>

        <tr>
          <th>Transf internas</th>
          <td>{{ enero[2] }}</td>
          <td>{{ febrero[2] }}</td>
          <td>{{ marzo[2] }}</td>
          <td>{{ abril[2] }}</td>
          <td>{{ mayo[2] }}</td>
          <td>{{ junio[2] }}</td>
          <td>{{ julio[2] }}</td>
          <td>{{ agosto[2] }}</td>
          <td>{{ septiembre[2] }}</td>
          <td>{{ octubre[2] }}</td>
          <td>{{ noviembre[2] }}</td>
          <td>{{ diciembre[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:"TableAdmin",
  data: () => ({
    enero: new Array(3),
    febrero: new Array(3),
    marzo: new Array(3),
    abril: new Array(3),
    mayo: new Array(3),
    junio: new Array(3),
    julio: new Array(3),
    agosto: new Array(3),
    septiembre: new Array(3),
    octubre: new Array(3),
    noviembre: new Array(3),
    diciembre: new Array(3),
  }),
  methods: {
    async createTable(apiUsuarios, apiTransExternas, apiTransfInternas) {
      /** Consulta http GET hace una petición sobre los usuarios para determinar la fecha de registro y determinar los nuevos usuarios */
      await axios.get(apiUsuarios).then((result) => {
        /** Verifica en que mes se registró el usuario */
        (result.data).forEach((user) => {
          const registroUsuario = new Date(user.creationDate)

          switch (registroUsuario.getMonth()+1) {
            case 1:
              this.enero.push(this.enero[0] + 1)
              break
            case 2:
              this.enero.push(this.febrero[0] + 1)
              break
            case 3:
              this.enero.push(this.marzo[0] + 1)
              break
            case 4:
              this.enero.push(this.abril[0] + 1)
              break
            case 5:
              this.enero.push(this.mayo[0] + 1)
              break
            case 6:
              this.enero.push(this.junio[0] + 1)
              break
            case 7:
              this.enero.push(this.julio[0] + 1)
              break
            case 8:
              this.enero.push(this.agosto[0] + 1)
              break
            case 9:
              this.enero.push(this.septiembre[0] + 1)
              break
            case 10:
              this.enero.push(this.octubre[0] + 1)
              break
            case 11:
              this.enero.push(this.noviembre[0] + 1)
              break
            case 12:
              this.enero.push(this.diciembre[0] + 1)
              break
          }
        })
      })

      /** Obtiene el mes el que se realizarón cada una de las transferencias externas */
      await axios.get(apiTransExternas).then((result) =>{
        (result.data).forEach((transExternas) =>{
            switch (transExternas.getMonth()+1) {
            case 1:
              this.enero.push(this.enero[1] + 1)
              break
            case 2:
              this.enero.push(this.febrero[1] + 1)
              break
            case 3:
              this.enero.push(this.marzo[1] + 1)
              break
            case 4:
              this.enero.push(this.abril[1] + 1)
              break
            case 5:
              this.enero.push(this.mayo[1] + 1)
              break
            case 6:
              this.enero.push(this.junio[1] + 1)
              break
            case 7:
              this.enero.push(this.julio[1] + 1)
              break
            case 8:
              this.enero.push(this.agosto[1] + 1)
              break
            case 9:
              this.enero.push(this.septiembre[1] + 1)
              break
            case 10:
              this.enero.push(this.octubre[1] + 1)
              break
            case 11:
              this.enero.push(this.noviembre[1] + 1)
              break
            case 12:
              this.enero.push(this.diciembre[1] + 1)
              break
          }
        })
      })

      /** Obtiene el mes el que se realizarón cada una de las transferencias internas */
      await axios.get(apiTransfInternas).then((result) =>{
        (result.data).forEach((transInternas) =>{
            switch (transInternas.getMonth()+1) {
            case 1:
              this.enero.push(this.enero[2] + 1)
              brea1
            case 2:
              this.enero.push(this.febrero[2] + 1)
              break
            case 3:
              this.enero.push(this.marzo[2] + 1)
              break
            case 4:
              this.enero.push(this.abril[2] + 1)
              break
            case 5:
              this.enero.push(this.mayo[2] + 1)
              break
            case 6:
              this.enero.push(this.junio[2] + 1)
              break
            case 7:
              this.enero.push(this.julio[2] + 1)
              break
            case 8:
              this.enero.push(this.agosto[2] + 1)
              break
            case 9:
              this.enero.push(this.septiembre[2] + 1)
              break
            case 10:
              this.enero.push(this.octubre[2] + 1)
              break
            case 11:
              this.enero.push(this.noviembre[2] + 1)
              break
            case 12:
              this.enero.push(this.diciembre[2] + 1)
              break
          }
        })
      })
    },
  },
  created(){

    /** Inicializa las variables */
    this.enero[0] = 0;
    this.febrero[0] = 0;
    this.marzo[0] = 0;
    this.abril[0] = 0;
    this.mayo[0] = 0;
    this.junio[0] = 0;
    this.julio[0] = 0;
    this.agosto[0] = 0;
    this.septiembre[0] = 0;
    this.octubre[0] = 0;
    this.noviembre[0] = 0;
    this.diciembre[0] = 0;
    
    this.enero[1] = 0;
    this.febrero[1] = 0;
    this.marzo[1] = 0;
    this.abril[1] = 0;
    this.mayo[1] = 0;
    this.junio[1] = 0;
    this.julio[1] = 0;
    this.agosto[1] = 0;
    this.septiembre[1] = 0;
    this.octubre[1] = 0;
    this.noviembre[1] = 0;
    this.diciembre[1] = 0;

    this.enero[2] = 0;
    this.febrero[2] = 0;
    this.marzo[2] = 0;
    this.abril[2] = 0;
    this.mayo[2] = 0;
    this.junio[2] = 0;
    this.julio[2] = 0;
    this.agosto[2] = 0;
    this.septiembre[2] = 0;
    this.octubre[2] = 0;
    this.noviembre[2] = 0;
    this.diciembre[2] = 0;

    this.createTable()
  }
}
</script>


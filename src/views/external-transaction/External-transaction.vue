<script setup>
import { Button } from '../../components/ui/'
</script>

<template>
  <div class="bg-gray-100 w-full">
    <section class="bg-blue-700 h-56 relative"></section>
    <div
      class="w-4/12 absolute top-20 left-0 right-0 card bg-white bg-no-repeat bg-center rounded-md shadow-lg w-1/2 m-auto px-10 py-10">
      <h1 class="text-slate-800 font-semibold text-lg">Transferir dinero</h1>
      <p class="text-gray-500">Ingresa los datos requeridos</p>
      <div class="row w-auto mt-2">
        <form @submit.prevent="sendForm()">
          <div class="form-floating mt-4">

            <input type="text" v-model="formData.nombre"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput" placeholder="Nombres" autocomplete="off" />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Nombre de quien recibe</label>
          <span v-if="dataValida && v$.formData.nombre.$invalid" class="text-danger">
            Ingresa mínimo un nombre y un apellido
          </span>
          <div class="form-floating mt-4">
            <select v-model="formData.tipoDoc"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingSelect" aria-label="Floating label select example">
              <option value="CC">Cédula de ciudadania</option>
              <option value="cedulaextranjeria">Cédula de extranjeria</option>
              <option value="nit">NIT</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="registrocivil">Registro Civil</option>
            </select>
          </div>
          <label class="text-sm font-sans" for="floatingSelect">Tipo de documento</label>
          <span v-if="dataValida && v$.formData.tipoDoc.$invalid" class="text-danger">
            *Seleccione su tipo de documento
          </span>
          <div class="form-floating mt-4">
            <input type="number" v-model="formData.numDoc"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput" placeholder="1234567" autocomplete="off" />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Nro. de documento</label>
          <span v-if="dataValida && v$.formData.numDoc.$invalid" class="text-danger">
            *Ingrese un número de documento válido
          </span>
          <div class="form-floating mt-4">
            <input type="text" v-model="formData.banco"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput" placeholder="Bancarapida" autocomplete="off" />
          </div>
          <label class="text-sm font-sans" for="floatingSelect">Banco</label>
          <div class="form-floating mt-4">
            <select v-model="formData.tipoCuenta"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingSelect" aria-label="Floating label select example">
              <option value="ahorros">Cuenta de ahorros</option>
              <option value="corriente">Cuenta corriente</option>
            </select>
          </div>
          <label class="text-sm font-sans" for="floatingSelect">Tipo de cuenta</label>
          <span v-if="dataValida && v$.formData.tipoCuenta.$invalid" class="text-danger">
            *Seleccione su tipo de cuenta
          </span>
          <div class="form-floating mt-4">
            <input type="number" v-model="formData.numCuenta"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput" placeholder="1234567" autocomplete="off" />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Nro. de cuenta</label>
          <span v-if="dataValida && v$.formData.numCuenta.$invalid" class="text-danger">
            *Ingrese su número de cuenta
          </span>
          <div class="form-floating mt-4">
            <input type="number" v-model="formData.monto"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput" placeholder="1234567" autocomplete="off" />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Monto a enviar</label>
          
          <div class="form-floating mt-4">
            <textarea class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500" 
            v-model="formData.description" placeholder="Descripción..." id="floatingTextarea2" style="height: 100px" autocomplete="off" ></textarea>
          </div>
          <label class="text-sm font-sans" for="floatingInput">Descripción</label>
          <template v-if="dataValida && v$.formData.monto.$invalid">
            <div class="text-danger">
              *Ingrese un monto igual o mayor a 10000
            </div>
          </template>

          <template v-if="dataValida && v$.formData.$invalid">
            <div class="h5 text-danger my-4">
              *Todos los campos son requeridos!
            </div>
          </template>

          <div class="row mt-2">
            <Button type="submit" variant="primary">Transferir</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
//import {ref} from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import axios from 'axios'
import * as moment from 'moment'

export default {
  name: 'SendVue',
  data() {
    return {
      dataValida: false,
      fechaNow : new Date(),
      v$: useVuelidate(),
      formData: {
        nombre: '',
        tipoDoc: '',
        numDoc: '',
        banco: '',
        tipoCuenta: '',
        numCuenta: '',
        monto: '',
        description: '',
      },
    }
  },
  methods: {
    showAlert(){
      this.$swal.fire({
          title: 'Error!',
          text: 'Hubo un error en realizar la operación',
          icon: 'error',
          confirmButtonText: 'Ok'
      });
    },
    sendForm() {
      if (this.v$.$invalid) {
        this.v$.$touch() //ejecuta la funcionalidad cada que se toque el formulario
        this.dataValida = true
        return false
      }
      let body = {
        ea_number: this.formData.numCuenta,
        transaction_type: 'Transaccion Internal',
        ea_type: this.formData.tipoCuenta,
        amount: this.formData.monto + '',
        date: moment.utc(this.fechaNow.setMinutes(this.fechaNow.getMinutes() + this.fechaNow.getTimezoneOffset())).format('YYYY-MM-DD HH:MM'),
        eao_name: this.formData.nombre,
        eao_id: this.formData.numDoc + '',
        eao_idtype: this.formData.tipoDoc,
        description: this.formData.description,
        bank_name: this.formData.banco,
      }
      axios
        .post('http://localhost:8000/api/externalTransCreateInternal', body)
        .then((res) => {
          //console.log(res)
          if (res.status == 200) {
            this.$swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Transacción exitosa!',
              showConfirmButton: false,
              timer: 1500,
            }); 
            return;
          } 
        })
        .catch( (error)=> {
          this.showAlert();
        });
    },
  },
  validations() {
    return {
      formData: {
        nombre: { required, minLength: minLength(6) },
        tipoDoc: { required },
        numDoc: { required, minLength: minLength(7) },
        banco: { required },
        description: {required, minLength: minLength(3)},
        tipoCuenta: { required },
        numCuenta: { required, minLength: minLength(7) },
        monto: { required, minLength: minLength(3) },
      },
    }
  },
}
</script>

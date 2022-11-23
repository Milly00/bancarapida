<script setup>
import { Button } from '../../components/ui/'
</script>

<template>
  <div class="bg-gray-100 w-full">
    <section class="bg-blue-700 h-56 relative"></section>
    <div
      class="w-4/12 absolute top-20 left-0 right-0 card bg-white bg-no-repeat bg-center rounded-md shadow-lg w-1/2 m-auto px-10 py-10"
    >
      <h1 class="text-slate-800 font-bold text-lg">Solicitud de credito</h1>
      <p class="text-gray-500">Ingresa los datos requeridos</p>
      <div class="row w-auto mt-2">
        <form @submit.prevent="sendForm()">
          <label class="text-sm font-sans text-slate-500" for="floatingInput"
            >Cantidad Solicitada</label>
            <div class="form-floating mt-2">
            <input
              type="text"
              v-model="formData.amountRequired"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="Cedula"
              autocomplete="off"
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Descripcion del credito</label>
          <div class="form-floating mt-4">
            <input
              type="text"
              v-model="formData.monto"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="1234567"
              autocomplete="off"
            />
          </div>
          <div class="row mt-2">
            <Button type="submit" onclick="return confirm('Confirmar');false" variant="primary">Solicitar</Button>
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

export default {
  name: 'SendVue',
  data() {
    return {
      dataValida: false,
      v$: useVuelidate(),
      formData: {
        amountRequired: '',
        description: '',
      },
    }
  },
  methods: {
    sendForm() {
      if (this.v$.$invalid) {
        this.v$.$touch() //ejecuta la funcionalidad cada que se toque el formulario
        this.dataValida = true
        return false
      }
      let body = {
        amount: this.formData.monto,
        description: this.formData.descripcion,
      }
      axios
        .post('http://localhost:8000/api/create/credit', body)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.$swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            })
          } else {
            this.$swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Lo sentimos ha ocurrido un error',
              showConfirmButton: false,
              timer: 1500,
            })
          }
        })
    },
  },
  validations() {
    return {
      formData: {
        nombre: { required, minLength: minLength(6) },
        tipoDoc: { required },
        numDoc: { required, minLength: minLength(7) },
        banco: { required },
        tipoCuenta: { required },
        numCuenta: { required, minLength: minLength(7) },
        monto: { required, minLength: minLength(5) },
      },
    }
  },
}
</script>
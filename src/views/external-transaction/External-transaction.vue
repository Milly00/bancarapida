<script setup>
import { Button } from '../../components/ui/';
</script>

<template>
  <div class="bg-gray-100 w-full">
    <section class="bg-blue-700 h-56 relative"></section>
    <div
      class="w-4/12 card-transf absolute top-20 left-0 right-0 card bg-white bg-no-repeat bg-center rounded-md shadow-lg w-1/2 m-auto px-10 py-10"
    >
      <h1 class="text-slate-800 font-semibold text-lg">Transferir dinero</h1>
      <p class="text-gray-500">Ingresa los datos requeridos</p>
      <div class="row w-auto mt-2 ">
        <form @submit.prevent="sendForm()">
          <div class="form-floating mt-4">
            

            <input
              type="text"
              v-model="formData.nombre"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="Nombres"
              autocomplete="off"
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput"
              >Nombre de quien recibe</label
            >
          <span
            v-if="dataValida && v$.formData.nombre.$invalid"
            class="text-danger"
          >
            Ingresa mínimo un nombre y un apellido
          </span>
          
          <div class="form-floating mt-4">
            
            <select
              v-model="formData.tipoDoc"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="cedula">Cédula de ciudadania</option>
              <option value="registrocivil">Registro Civil</option>
              <option value="cedulaext">Cédula de extranjeria</option>
            </select>
          </div>
          <label class="text-sm font-sans" for="floatingSelect"
              >Tipo de documento</label
            >
          <span
            v-if="dataValida && v$.formData.tipoDoc.$invalid"
            class="text-danger"
          >
            *Seleccione su tipo de documento
          </span>
          <div class="form-floating mt-4">
           
            <input
              type="number"
              v-model="formData.numDoc"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="1234567"
              autocomplete="off"
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput"
              >Nro. de documento</label
            >
          <span
            v-if="dataValida && v$.formData.numDoc.$invalid"
            class="text-danger"
          >
            *Ingrese un número de documento válido
          </span>
          <div class="form-floating mt-4">
            <input
              type="text"
              v-model="formData.banco"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="Bancarapida"
              autocomplete="off"
              disabled
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput">Banco</label>

          <div class="form-floating mt-4">
            
            <select
              v-model="formData.tipoCuenta"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="ahorros">Cuenta de ahorros</option>
              <option value="corriente">Cuenta corriente</option>
            </select>
          </div>
          <label class="text-sm font-sans" for="floatingSelect"
              >Tipo de cuenta</label
            >
          <span
            v-if="dataValida && v$.formData.tipoCuenta.$invalid"
            class="text-danger"
          >
            *Seleccione su tipo de cuenta
          </span>
          <div class="form-floating mt-4">
            
            <input
              type="number"
              v-model="formData.numCuenta"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="1234567"
              autocomplete="off"
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput"
              >Nro. de cuenta</label
            >
          <span
            v-if="dataValida && v$.formData.numCuenta.$invalid"
            class="text-danger"
          >
            *Ingrese su número de cuenta
          </span>
          <div class="form-floating mt-4">
            
            <input
              type="number"
              v-model="formData.monto"
              class="block w-full form-control p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
              id="floatingInput"
              placeholder="1234567"
              autocomplete="off"
            />
          </div>
          <label class="text-sm font-sans" for="floatingInput"
              >Monto a enviar</label
            >
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

export default {
  name: 'SendVue',
  data() {
    return {
      dataValida: false,
      v$: useVuelidate(),
      formData: {
        nombre: '',
        tipoDoc: '',
        numDoc: '',
        banco: 'Bancarapida',
        tipoCuenta: '',
        numCuenta: '',
        monto: '',
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
      console.log('Enviado!!', this.formData)
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

<script setup>
import {
  TextField,
  PasswordField,
  LinkButton,
  Button,
  Tooltip,
} from '../../components'
import { TheLogo } from '@/components/ui'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { api } from '../../main'
import { useToast } from 'vue-toastification'
import { useIsAuth } from '@/composables'

useIsAuth()

let form = ref({ user_name: '', password: '' })

const router = useRouter()

const toast = useToast()

async function login() {
  try {
    let response = await api.instance.post('/login', form.value)
    localStorage.setItem('user', response.data.token)
    router.push('/customer')
  } catch (e) {
    toast.error(e.response.data.detail)
  }
}
</script>

<template>
  <article class="flex">
    <section
      class="w-1/2 h-screen bg-primary flex flex-col justify-center items-center"
    >
      <img src="../../assets/auth_view_img.png" class="w-[500px]" />

      <div class="w-96 text-center text-white">
        <h4 class="text-3xl font-bold mt-12">
          Reciba pagos de cualquier sistema bancario
        </h4>
        <p class="mt-8 text-lg font-light">
          Conecte su tarjeta bancaria y cree cuentas en la moneda seleccionada.
        </p>
      </div>
    </section>
    <section class="w-1/2 h-screen px-32 flex flex-col justify-center">
      <TheLogo class="w-24 h-24" />
      <h2 class="font-semibold text-4xl my-5">Bienvenido</h2>
      <p class="mb-6">Inicie sesión para acceder a su cuenta.</p>

      <!--
        TODO: 
        - mover este formulario a otro componente FormLogin
        - crear un FormRegister con los componentes para el registro
        - implementar el cambio entre un formulario y otro
      -->

      <div class="flex flex-col justify-center">
        <label class="text-gray-600 text-lg mb-2" for="user_name"
          >Nombre de usuario</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.user_name"
        />

        <br />

        <label class="text-gray-600 text-lg mb-2" for="password"
          >Contraseña</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="password"
          v-model="form.password"
        />

        <button
          class="bg-primary text-white text-xl py-3 rounded-md mt-12"
          @click="login"
        >
          Iniciar sesión
        </button>
      </div>

      <div class="text-center mt-4">
        ¿No tienes una cuenta?
        <RouterLink class="text-primary w-fit" to="/auth/register"
          >Registrarme</RouterLink
        >
      </div>
    </section>
  </article>
</template>

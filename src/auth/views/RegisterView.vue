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
import { IdentityTypes, Genders } from '../../constants'
import { api } from '../../main'
import { useToast } from 'vue-toastification'
import { useIsAuth } from '@/composables'

useIsAuth()

let form = ref({})

const router = useRouter()

const toast = useToast()

async function register() {
  try {
    let response = await api.instance.post('/signout', form.value)
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
    <section class="w-1/2 h-screen overflow-auto px-32 py-32">
      <TheLogo class="w-24 h-24" />
      <h2 class="font-semibold text-4xl my-5">Registrarse</h2>
      <p class="mb-6">Ingrese sus datos para acceder a su cuenta.</p>
      <div class="flex flex-col">
        <label class="text-gray-600 text-lg mb-2" for="identityType"
          >Tipo de identificación</label
        >
        <select
          class="bg-slate-100 px-4 py-2 rounded-md"
          id="identityType"
          name="identityType"
          v-model="form.identityType"
        >
          <option v-for="(v, k) in IdentityTypes" :value="k" :key="k">
            {{ v }} ({{ k }})
          </option>
        </select>
        <br />
        <label class="text-gray-600 text-lg mb-2" for="identityNumber"
          >Número de identificación</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.identityNumber"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="name">Nombres</label>
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.name"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="lastname"
          >Apellidos</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.lastname"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="address"
          >Dirección</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.address"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="phone"
          >Número de celular</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="tel"
          v-model="form.phone"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="gender">Género</label>
        <select
          class="bg-slate-100 px-4 py-2 rounded-md"
          id="gender"
          name="gender"
          v-model="form.gender"
        >
          <option v-for="(v, k) in Genders" :value="k" :key="k">
            {{ v }}
          </option>
        </select>
        <br />
        <label class="text-gray-600 text-lg mb-2" for="dob"
          >Fecha de nacimiento</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="date"
          v-model="form.dob"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="user_name"
          >Nombre de usuario</label
        >
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="text"
          v-model="form.user_name"
        />
        <br />
        <label class="text-gray-600 text-lg mb-2" for="email">Email</label>
        <input
          class="bg-slate-100 px-4 py-2 rounded-md"
          type="email"
          v-model="form.email"
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
          @click="register"
        >
          Registrarme
        </button>
      </div>
    </section>
  </article>
</template>

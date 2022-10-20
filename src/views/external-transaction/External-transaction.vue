<script setup>
import { Button } from '../../components/ui/'
</script>

<template>
  <div class="bg-gray-100 w-full">
    <section class="bg-blue-700 h-56 relative ">
      
    </section>
    <div
        class="absolute top-20 left-0 right-0 card bg-white bg-no-repeat bg-center rounded-md shadow-lg w-1/2 m-auto px-10 py-10"
      >
        <h1 class="text-slate-800 font-semibold text-lg">Transferir dinero</h1>
        <p class="text-gray-500">Ingresa los datos requeridos</p>
        <div class="row w-auto mt-4">
          <div><p>Monto a transferir</p></div>
          <input
            placeholder="Ingresar monto"
            class="block w-full p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
            type="number"
          />
        </div>
        <div class="row w-auto mt-2">
          <div><p>Número de cuenta</p></div>
          <input
            placeholder="Ingresas número"
            class=" block w-full p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
            type="number"
          />
        </div>
        <div class="row w-auto mt-2">
          <div><p>Tipo de cuenta</p></div>
          <input
            placeholder="Ingresar tipo cuenta"
            class=" block w-full p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
          />
        </div>
        <div class="row w-auto mt-2">
          <div><p>Banco</p></div>
          <input
            placeholder="Ingresar banco"
            class="block w-full p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500"
            type="text"
          />
        </div>
        <div class="row w-auto mt-2">
          <div><p>Descripción</p></div>
          <textarea placeholder="Ingresar banco"
            class="block w-full p-2 rounded bg-slate-200 border-slate-300 focus:outline-none focus:ring focus:border-blue-500" name="" id="" cols="30" rows="3"></textarea>
          
        </div>
        <div class="row mt-2">
          <Button variant="primary">Solicitar</Button>
        </div>
      </div>
  </div>
</template>

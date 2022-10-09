<script setup>
  import { 
    Logo,
    TextField,
    PasswordField,
    LinkButton,
    Button,
  } from '../../components';
</script>

<template>

  <article class='flex'>
    <section class='w-1/2 h-screen bg-primary'>

    </section>
    <section class='w-1/2 h-screen px-32 flex flex-col justify-center'>
      <Logo />
      <h2 class='font-semibold text-4xl my-4'>
        Bienvenido
      </h2>
      <p class='mb-6'>
        Inicie sesión para acceder a su cuenta.
      </p>

      <TextField
        label='Correo electronico'
        value=''
        placeholder='Escriba su correo electronico'
      />
      
      <br/>

      <PasswordField
        label='Password'
        value=''
        placeholder='Escriba su contraseña'
      />

      <LinkButton
        class='mt-4'
        content='¿Has olvidado tu contraseña?'
      />
      
      <Button
        class='mt-12'
        content='Iniciar sesión'
      />

      <div 
        class='text-center mt-4'
      >
        ¿No tienes una cuenta?
        <LinkButton 
          content='Registrarme'
        />
      </div>
      

    </section>
  </article>
</template>

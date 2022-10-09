<script setup>
  import { 
    Logo,
    TextField,
    PasswordField,
    LinkButton,
    Button,
    Tooltip,
  } from '../../components';
</script>

<template>

  <article class='flex'>
    <section 
      class='w-1/2 h-screen bg-primary flex flex-col justify-center items-center'
    >
      <img 
        src='../../assets/auth_view_img.png' 
        class='w-[500px]'
      />

      <div
        class='w-96 text-center'
      >
        <h4
          class='text-3xl font-bold mt-12'
        >
          Reciba pagos de cualquier sistema bancario
        </h4>
        <p
          class='mt-8 text-lg font-light'
        >
          Conecte su tarjeta bancaria y cree cuentas en la moneda seleccionada.
        </p>
      </div>

    </section>
    <section 
      class='w-1/2 h-screen px-32 flex flex-col justify-center'
    >
      <Logo />
      <h2 class='font-semibold text-4xl my-5'>
        Bienvenido
      </h2>
      <p class='mb-6'>
        Inicie sesión para acceder a su cuenta.
      </p>
      
      <!--
        TODO: 
        - mover este formulario a otro componente FormLogin
        - crear un FormRegister con los componentes para el registro
        - implementar el cambio entre un formulario y otro
      -->

      <form
        class='flex flex-col justify-center'
      >
        <TextField
          label='Correo electronico'
          value=''
          placeholder='Escriba su correo electronico'
          info='necesitamos tu correo'
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
      </form>

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

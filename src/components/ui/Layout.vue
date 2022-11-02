<template>
  <header class="sticky top-0 z-50">
    <slot name="header"></slot>
  </header>
  <main class="relative flex flex-col overflow-hidden">
    <aside></aside>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

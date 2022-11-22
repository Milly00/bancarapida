<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand a_nav" href="/customer"
        ><img class="navbrand" src="../../assets/logo.png" />
        <p>BANKR</p></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/customer"
              >Dashboard</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Operaciones</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/list-external-transaction">
              Transacciones Externa
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="w-full"></nav>
</template>

<script>
  export let segment;

  function toggleActive() {
    document.querySelector(".navbar-burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }
</script>

<nav class="navbar nav-bottom-border" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <img src="logo-2.png" alt="covid virus" />
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" on:click="{toggleActive}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment=== undefined }>Home</a>
      <a href="/about" class="navbar-item" class:is-active={segment==='about'}>About</a>
    </div>
    <div class="navbar-end">
      <a href="/login" class="navbar-item has-background-grey-lighter">Login</a>
    </div>
  </div>
</nav>
<style>
  .nav-bottom-border {
    border-bottom: 1px solid rgb(235, 232, 232);
  }

  .active-background {
    background-color: ;
  }

  @media (min-width: 769px) {
    .nav-bottom-border {
      border-bottom: 1px solid rgb(153, 152, 152);
    }
  }
</style>
